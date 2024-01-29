import Link from "next/link";

const FormSuccessPage = () => {
    return (
        <div className="bg-sky-100 min-h-screen flex items-center justify-center">
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
                <h2 className="text-2xl font-bold text-cyan-600 mb-4">
                    Form Submitted Successfully!
                </h2>
                <p className="text-gray-700 mb-6">
                    Thank you for reaching out. We have received your submission
                    and will get back to you as soon as possible.
                </p>

                <Link
                    href="/"
                    className="text-cyan-600 hover:text-cyan-700 font-semibold"
                >
                    Return to Home
                </Link>
            </div>
        </div>
    );
};

export default FormSuccessPage;
