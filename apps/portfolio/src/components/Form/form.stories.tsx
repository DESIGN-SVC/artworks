import { useState } from "react";
import { Button, Input } from "..";
import { Root, SubTitle, Title } from "./form";
import { StoryObj } from "@storybook/react";

export default {
  title: "Components/Form",
  tags: ["autodocs"],
  component: Root,
  argTypes: {
    ref: {
      table: {
        disable: true,
      },
    },
    children: {
      table: {
        disable: true,
      },
    },
  },
};

export const Login: StoryObj = {
  args: {
    children: (
      <>
        <div className="space-y-1">
          <Title>Login</Title>
          <SubTitle>Enter your access</SubTitle>
        </div>
        <form className="space-y-5">
          <Input label="User" placeholder="User" type="text" />
          <div className="space-y-2.5 text-end">
            <Input
              label="Password"
              placeholder="Password"
              type="password"
              className="w-full"
            />
            <a
              href="#"
              className="ml-auto w-fit text-xs text-violet-600 hover:text-violet-500 font-semibold transition-colors "
            >
              Fogot password?
            </a>
          </div>
          <Button appearance="tertiary" size="lg">
            Continue
          </Button>
          <p className="text-selago-700 text-center w-full">
            Don't have on account yet?{" "}
            <a
              href="#"
              className="text-violet-600 font-semibold hover:text-violet-500 transition-colors"
            >
              Sing up
            </a>
          </p>
        </form>
      </>
    ),
  },
};

export const ResetPassword: StoryObj = {
  args: {
    children: (
      <>
        <div className="space-y-1">
          <Title>Forgot password?</Title>
          <SubTitle>No worries, we’ll send you reset instructions.</SubTitle>
        </div>
        <form className="space-y-5">
          <Input label="E-Mail" placeholder="E-Mail" type="email" />
          <Button appearance="tertiary" size="lg">
            Continue
          </Button>
        </form>
      </>
    ),
  },
};

export const Register: StoryObj = {
  args: {
    children: (
      <>
        <Title>Register</Title>
        <form className="space-y-5">
          <Input label="Name" placeholder="Name" type="text" />
          <Input label="E-Mail" placeholder="E-Mail" type="email" />
          <Input label="Team" placeholder="Team" type="text" />
          <Button appearance="tertiary" size="lg">
            Continue
          </Button>
        </form>
      </>
    ),
  },
};

export const Error: StoryObj = {
  decorators: [
    () => {
      const [error, setError] = useState(false);

      return (
        <Root>
          <div className="space-y-1">
            <Title>Login</Title>
            <SubTitle>Enter your access</SubTitle>
          </div>
          <form className="space-y-5">
            <Input
              label="User"
              placeholder="User"
              type="text"
              error={error ? "Error" : ""}
            />
            <div className="space-y-2.5 text-end">
              <Input
                label="Password"
                placeholder="Password"
                type="password"
                className="w-full"
                error={error ? "Error" : ""}
              />
              <a
                href="#"
                className="ml-auto w-fit text-xs text-violet-600 hover:text-violet-500 font-semibold transition-colors "
              >
                Fogot password?
              </a>
            </div>
            <Button
              appearance="tertiary"
              size="lg"
              type="button"
              onClick={() => setError(!error)}
            >
              Continue
            </Button>
            <p className="text-selago-700 text-center w-full">
              Don't have on account yet?{" "}
              <a
                href="#"
                className="text-violet-600 font-semibold hover:text-violet-500 transition-colors"
              >
                Sing up
              </a>
            </p>
          </form>
        </Root>
      );
    },
  ],
};
