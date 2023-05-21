import React from "react";
import { useLazyQuery, useMutation, useQuery } from "@apollo/client";
import { deleteUser, getAllUsers } from "../constants";
import { AddUser } from "./AddUser";

export const Home = () => {
  const {
    data: usersData,
    error,
    refetch: fetchAllUsers,
  } = useQuery(getAllUsers);

  const [deleteUserfn, { data: deletedUser, error: deleteUserError }] =
    useMutation(deleteUser);

  console.log(usersData);
  return (
    <div>
      <AddUser refetch={fetchAllUsers} />
      {usersData && (
        <div>
          {usersData.users.map((user) => {
            return (
              <ul>
                <li>{user.id}</li>
                <li>{user.name}</li>
                <li>{user.username}</li>
                <li>{user.age}</li>
                <li>
                  <button
                    onClick={() =>(
                      deleteUserfn({
                        variables: {
                          id: user.id,
                        },
                      })&& fetchAllUsers())
                    }
                  >
                    Delete user
                  </button>
                </li>
              </ul>
            );
          })}
        </div>
      )}
    </div>
  );
};
