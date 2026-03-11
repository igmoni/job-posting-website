import { LoginButton } from "@/components/LoginButton";

const page = () => {
  return (
    <div className="min-h-screen w-full flex bg-neutral-50 items-center justify-center">
      <div className="flex bg-white p-8 flex-col rounded-xl shadow-sm gap-5 justify-center items-center text-center">
        <div className="">
          <h2 className="text-xl font-semibold">Welcome to Job Board</h2>
          <p>Sign in to post jobs or apply for opportunities</p>
        </div>

        <LoginButton />

        <p className="max-w-xs">
          By signing in, you agree to our
          <a>Terms ot Service</a> and <a>Privacy Policy</a>
        </p>
      </div>
    </div>
  );
};

export default page;
