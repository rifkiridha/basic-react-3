import AuthLayout from "../components/templates/AuthLayout";

export default function AppRegister() {
    return (
        <>
<section className="p-6 bg-[#fff0e5] dark:text-gray-800">
	<form noValidate="" action="" className="container flex flex-col mx-auto space-y-12">
		<fieldset className="grid grid-cols-2 gap-6 p-6">
			<div className=" lg:col-span-1">
            <img src="/public/images/home.jpg" alt="gambar" className="w-10/12 border-solid border-2 border-gray-800 rounded-lg object-contain hover:object-scale-down" />
			</div>
            <AuthLayout title="Join the millions learning to code with Codecademy for free" type="register"></AuthLayout>
		</fieldset>
	</form>
</section>
</>
                )
}


