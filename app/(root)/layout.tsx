import SideBar from "@/components/sideBar";

import Image from "next/image";
import MobileNav from "@/components/mobileNav";
export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {

    const loggedIn = { firstName: 'Johnson', lastName: 'Griffin'};
    return (
        <main className="flex h-screen w-full font-inter">
            <SideBar  user={loggedIn} />

            <div className='flex size-full flex-col'>
                <div className='root-layout'>
                    <Image src='/icons/logo.svg' width={30} height={30} alt={'menu icon'}
                    ></Image>
                    <div>
                        <MobileNav user={loggedIn} />
                    </div>
                </div>
                {children}
            </div>

        </main>
    );
}
