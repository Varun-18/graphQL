import { useLazyQuery, useMutation } from "@apollo/client";
import React from "react";
import { useForm } from "react-hook-form";
import { addUser, updateUser } from "../constants";

export const AddUser = ({ refetch }) => {
  const { register, handleSubmit } = useForm();
  const [insertUser, { data: addedUser, error: addUserError }] =
    useMutation(addUser);
  const [updateUserfn, { data: updatedUser, error: updateUserError }] =
    useMutation(updateUser);
  const onSubmit = (details) => {
    // console.log(details);
    insertUser({
      variables: {
        userData: {
          name: `${details.name}`,
          username: `${details.username}`,
          age: parseInt(details.age),
        },
      },
    });
    refetch();
  };

  const editUsername = (details) => {
    updateUserfn({
      variables: {
        id: {
          id: parseInt(details.id),
          username: details.username,
        },
      },
    });
    refetch();
  };
  return (
    <div>
      <form action="" onSubmit={handleSubmit(onSubmit)}>
        <h1>Add User</h1>
        <input placeholder="name" type="text" {...register("name")} />
        <br />
        <input placeholder="username" type="text" {...register("username")} />
        <br />
        <input placeholder="age" type="number" {...register("age")} />
        <br />
        <input type="submit" />
      </form>
      <hr />
      <form action="" onSubmit={handleSubmit(editUsername)}>
        <h1>Update User</h1>
        <input placeholder="id" type="text" {...register("id")} />
        <br />
        <input placeholder="username" type="text" {...register("username")} />
        <br />
        <input type="submit" />
      </form>
      {/* {addedUser && <p>{JSON.stringify(addedUser) + "*****************"}</p>} */}
    </div>
  );
};
