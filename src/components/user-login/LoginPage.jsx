import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Input,
  Checkbox,
  Button,
} from "@material-tailwind/react";
import axios from "axios";
import { useState } from "react";
import { BaseUrl } from "../constants/Constants";
import toast, { Toaster } from "react-hot-toast";
import { Loader } from "../Loader/Loader";
import { useNavigate } from "react-router";
import { jwtDecode } from "jwt-decode";
export function LoginCard() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [companyDetails, setCompanyDetails] = useState([]);
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    setLoading(true);
    const apiUrl = `${BaseUrl}company/login/`;
    const data = {
      username: username,
      password: password,
    };
    try {
      const response = await axios.post(apiUrl, data);

      if (response.status === 200) {
        localStorage.setItem("authToken", JSON.stringify(response.data));
        const token = jwtDecode(response.data.access);
        const id = token.id;
        const companyApiUrl = `${BaseUrl}company/company_retrieval/${id}/`;
        const companyResponse = await axios.get(companyApiUrl, {
          headers: {
            Authorization: `Bearer ${response.data.access}`,
          },
        });

        setCompanyDetails(companyResponse.data);
        toast.success("User logged in successfully");
        setUsername("");
        setPassword("");
        navigate("/home", { state: { companyDetails: companyResponse.data } });
      }
    } catch (error) {
      toast.error("Something went wrong");
      console.error("Login failed!", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {loading && <Loader />}
      <Card className="md:w-96 md:h-96 flex items-center gap-4">
        <CardHeader
          variant="gradient"
          color="gray"
          className="mb-4 grid h-28 place-items-center"
        >
          <Typography variant="h3" className="text-black">
            Log In
          </Typography>
        </CardHeader>
        <CardBody className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Username"
            onChange={(e) => setUsername(e.target.value)}
            value={username}
            className="border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:border-blue-500"
          />
          <input
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            className="border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:border-blue-500"
          />
        </CardBody>
        <CardFooter className="pt-0">
          <Button
            className="btn"
            variant="gradient"
            fullWidth
            onClick={(e) => handleSubmit()}
          >
            Sign In
          </Button>
        </CardFooter>
      </Card>{" "}
    </>
  );
}
