import PersonAddAlt1Icon from "@mui/icons-material/PersonAddAlt1";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import Link from "next/link";

const METADATA = [
  {
    path: "/register",
    comp: <PersonAddAlt1Icon className="mx-auto" />,
    title: "新規登録",
  },
  {
    path: "/login",
    comp: <LockOpenIcon className="mx-auto" />,
    title: "ログイン",
  },
];

export const NewAccountPage = () => {
  return (
    <div>
      {METADATA.map((item) => (
        <div key={item.title} className="mt-24">
          <Link href={item.path}>
            <div className="w-full text-center bg-[#D9D9D9] h-24 pt-6">
              {item.comp}
              <h1 className="text-6 w-24 mx-auto">{item.title}</h1>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};
