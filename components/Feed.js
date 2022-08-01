import MiniProfile from "./MiniProfile";
import Posts from "./Posts";
import Stories from "./Stories";
import Suggetions from "./Suggetions";
import { useSession } from "next-auth/react";

const Feed = () => {

    const { data: session }  = useSession();

    return (
        <main className={`grid grid-cols-1 md:grid-cols-2 md:max-w-3xl
        xl:grid-cols-3 xl:max-w-6xl mx-auto ${!session && "!grid-cols-1 !max-w-xl"}`}>
            <section className="col-span-2">
                <Stories />
               { session &&<Posts /> }
            </section>

            {session && <section className="hidden lg:block md:col-span-1 mt-12 ml-7">
                <div className="fixed">
                    {/* Mini Profile */}
                    <MiniProfile
                        img={session?.user?.image}
                        username={session?.user?.username}
                        status="Hey I am on instagram"
                        btnText="Sign Out"
                    />
                    {/* Suggetions */}
                    <Suggetions />
                </div>
            </section>}
        </main>
    );
}

export default Feed;