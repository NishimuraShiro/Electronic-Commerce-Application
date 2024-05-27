import { AccountButtonItem } from "./ui/AccountButtonItem";
import { AccountProfile } from "./ui/AccountProfile";
import { AccountNotification } from "./ui/AccountNotification";
import { AccountPersonalInfo } from "./ui/AccountPersonalInfo";

export const AccountPageItem = () => {
  const orderedDate = new Date("2023-09-26");
  return (
    <div>
      <div className="my-24">
        {/* AccountNotification実装必要 */}
        <AccountNotification
          date={orderedDate}
          notification="に○○を注文しました。"
        />
      </div>
      <div className="mt-24">
        <AccountProfile />
      </div>
      {/* 個人情報 */}
      {/* 要リファクタ */}
      <div className="my-24">
        <AccountPersonalInfo
          name="山田太郎"
          postCode="123-4567"
          address="東京都〇〇区１丁目2-3 〇〇ビル4階"
          country="日本"
          telephone={1234567}
          deliveryMethod="普通郵便"
        />
      </div>
      <div className="mt-12">
        <AccountButtonItem />
      </div>
    </div>
  );
};
