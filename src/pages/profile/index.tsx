import Loader from "@/components/Loader";
import { useUser } from "@auth0/nextjs-auth0/client";
import { AccountCircleRounded, Email } from "@mui/icons-material";

const Profile = () => {
  const { error, isLoading, user } = useUser();

  const profileCards = [
    {
      id: "Total_cart",
      title: "Total cart",
      value: "$0.00",
    },
    {
      id: "Saved_products",
      title: "Saved products",
      value: 0,
    },
    {
      id: "Shared_products",
      title: "Shared products",
      value: 0,
    },
  ];

  if (error) {
    return <>Something was </>;
  }

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="pt-[70px]" style={{ minHeight: "calc(100vh - 70px)" }}>
      <div className="flex flex-col justify-center items-center bg-2 min-h-[250px] relative bg-green-500">
        <p className="font-extralight text-4xl">{user?.name}</p>
        <p className="w-full flex justify-center pt-2">
          <Email className="mr-3" />
          {user?.email}
        </p>
        <div className="bg-white p-0 absolute top-44  sm:left-32 rounded-full">
          <AccountCircleRounded
            style={{ fontSize: "130px", color: "#d3d3d3" }}
          />
        </div>
      </div>
      <div
        className=" flex flex-col py-20 px-10"
        style={{ minHeight: "calc(100vh - 390px)" }}
      >
        <div className="grid grid-cols-3 h-full gap-6">
          {profileCards.map((card) => {
            return (
              <div
                className="col-span-3 sm:col-span-1 flex flex-col justify-center items-center"
                key={card.id}
              >
                <div className="bg-slate-200/40 w-full flex flex-col rounded-xl h-[200px] justify-center items-center">
                  <p className="text-3xl font-extralight">{card.title}</p>
                  <p className="text-2xl font-normal pt-2">{card.value}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Profile;
