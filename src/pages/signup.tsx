import Select from "react-select";
import { useForm, SubmitHandler } from "react-hook-form";
import { Button, Grid, TextField } from "@material-ui/core";

interface IFormInput {
  firstName: string;
  lastName: string;
  iceCreamType: { label: string; value: string };
}

export default function signUp() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<IFormInput>();

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    console.log("Submitted");
    console.log(data);
  };
  console.log("Errors:", errors);

  return (
    <form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
      <Grid container direction="column" alignItems="center" justifyContent="center" spacing={2}>
        <Grid item>
          <TextField
            variant="outlined"
            id="username"
            label="Username"
            error={errors.username ? true : false}
            helperText={errors.username ? errors.username.message : null}
            {...register("username", {
              required: { value: true, message: "Please enter a username" },
              minLength: { value: 3, message: "Username must be at least 3 characters" },
              maxLength: { value: 20, message: "Username must be 20 characters or less" },
            })}
          />
        </Grid>
        <Grid item>
          <TextField
            variant="outlined"
            id="email"
            label="Email"
            error={errors.email ? true : false}
            helperText={errors.email ? errors.email.message : null}
            {...register("email", {
              required: { value: true, message: "Please enter an email address" },
            })}
          />
        </Grid>
        <Grid item>
          <TextField
            variant="outlined"
            id="password"
            label="Password"
            error={errors.password ? true : false}
            helperText={errors.password ? errors.password.message : null}
            {...register("password", {
              required: { value: true, message: "Please enter a password" },
              minLength: { value: 8, message: "Username must be at least 3 characters" },
              maxLength: { value: 30, message: "Username must be 20 characters or less" },
            })}
          />
        </Grid>
        <Grid>
          <Button variant="contained" type="submit">
            Sign Up
          </Button>
        </Grid>
      </Grid>
    </form>
  );
}
