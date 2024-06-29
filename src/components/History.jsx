import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addHistory } from "../features/history/historySlice";
import { getInfoFromLocalStorage } from "../utils";

const links = [
  { id: 1, url: "/", text: "home" },
  { id: 2, url: "chats", text: "chats" },
];

const body = {
  data: {
    sessionId: getInfoFromLocalStorage(),
  },
};

const NavLinks = () => {
  const [responseBody, setResponseBody] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  const getHistory = async () => {
    try {
      const request = await axios.post(
        "https://basewiki-backend-7m72leje7q-uc.a.run.app//GetSessionHistory",
        body
      );
      if (request.status === 200) {
        setResponseBody(request.data.result);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getHistory();
  }, []);
  const user = useSelector((state) => state.userState.user);
  return (
    <>
      <div className="h-4"></div>
      <NavLink>Pages</NavLink>

      <div className="h-4 border-t border-gray-300"></div>
      {links.map((link) => {
        const { id, url, text } = link;
        if ((url === "checkout" || url === "orders") && !user) return null;
        return (
          <li key={id}>
            <NavLink className="capitalize" to={url}>
              {text}
            </NavLink>
          </li>
        );
      })}

      <div className="h-10"></div>
      <NavLink>History</NavLink>

      <div className="h-4 border-t border-gray-300"></div>
      {isLoading ? (
        <div className="flex justify-start">
          <div className="bg-gray-300 text-gray-800 p-4 rounded-lg max-w-xs md:max-w-md lg:max-w-lg">
            <div className="h-20 flex items-center justify-center">
              <span className="loading loading-ring loading-lg"></span>
            </div>
          </div>
        </div>
      ) : (
        <>
          {responseBody &&
            responseBody.map((link, index) => {
              const { role, content } = link;
              if (role === "model") return <></>;
              return (
                <li key={index}>
                  <div
                    onClick={() => {
                      dispatch(addHistory([link, responseBody[index + 1]]));
                    }}
                    className="justify-start items-center h-10"
                  >
                    <NavLink
                      className="capitalize overflow-hidden whitespace-nowrap truncate"
                      to={"/chats"}
                    >
                      {content[0].text}
                    </NavLink>
                  </div>
                </li>
              );
            })}
          <div className="h-10 border-gray-300"></div>
        </>
      )}
    </>
  );
};
export default NavLinks;
