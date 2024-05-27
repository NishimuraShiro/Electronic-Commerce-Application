import { FooterNavi } from "@/components/FooterNavi";
import { Copyright } from "@/components/ui/Copyright";

// mapで回す
type footerProps = {
  icons: {};
};

const page = () => {
  return (
    <>
      <div className="w-full bottom-6">
        <Copyright />
      </div>
      <div className="w-full bg-slate-500 fixed bottom-0">
        <FooterNavi />
      </div>
    </>
  );
};
export default page;
