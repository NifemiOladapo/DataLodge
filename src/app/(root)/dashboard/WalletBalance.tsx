import Image from "next/image";

const WalletBalance = () => {
  return (
    <div className="flex pt-10 px-10 pb-5 text-white bg-indigo-600 items-center justify-between rounded-lg">
      <div className="flex flex-col">
        <p className="sm:text-2xl text-xl">Wallet Balance</p>
        <p className="sm:text-2xl text-xl">$476.6</p>
      </div>

      <Image src="/wallet-white.png" alt="wallet" width={65} height={65} />
    </div>
  );
};

export default WalletBalance;
