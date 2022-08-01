import { getProviders, signIn } from "next-auth/react";
import Header from "../../components/Header";

const SignIn = ({ providers }) => {

    return (
        <>
            <Header />

            <div className="flex flex-col items-center
                            min-h-screen mt-14 py-2 px-14
                            text-center">
                <img 
                    src="https://links.papareact.com/ocw"
                    className="w-80"
                />
                <p className="font-xs italic">
                    This is not the real instagram app, it is built for learning 
                    purpose only.
                </p>
                <div className="mt-40">
                    {Object.values(providers).map((provider) => (
                        <div key={provider.name}>
                            <button
                                className="p-3 bg-blue-500 
                                   text-white 
                                   font-semibold 
                                   rounded-lg"
                                onClick={() => signIn(provider.id, { callbackUrl: "/" })}>
                                Sign in with {provider.name}
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}


export const getServerSideProps = async () => {

    const providers = await getProviders();

    return {
        props: {
            providers
        }
    }
}

export default SignIn;