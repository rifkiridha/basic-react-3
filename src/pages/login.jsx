import AuthLayout from "../components/templates/AuthLayout";

export default function AppLogin() {
  return (
<section className=" bg-[#fff0e5] dark:text-gray-800">
	<form noValidate="" action="" className="container flex flex-col mx-auto space-y-12">
		<fieldset className="grid grid-cols-2 gap-6 p-6">
			<div className="space-y-2 col-span-full lg:col-span-1">
            <img src="/public/images/home.jpg" alt="gambar" className="p-4 rounded-t-lg" />
			</div>
      <AuthLayout title="Login to Codecademy" type="login"></AuthLayout>
		</fieldset>
	</form>
</section>
  )
}


