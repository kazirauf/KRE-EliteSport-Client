import Swal from 'sweetalert2'
import '../index.css'
const ContactUs = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "06dad70c-7739-42a4-a0b3-5427272b2bae");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
        Swal.fire({
            title: "Your Message is send!",
            icon: "success"
          });
    }
  };
  return (
    <div id="contact" className="my-20">
       <h1 className="text-center text-4xl font-bold mt-20">Contact <span className="text-blue-500">Us</span></h1>

    <div className="flex justify-center">
        <div className="flex flex-col md:flex-row items-center 2xl::ml-52 text-white p-6">
            <div className="md:w-1/2 p-4">
                <img src="https://images.unsplash.com/photo-1515378960530-7c0da6231fb1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Profile" className="rounded-md lg:max-w-xl max-w-sm  rounded-lg shadow-2xl" />
            </div>
            <div className="md:w-1/2 p-4">
                <form  onSubmit={onSubmit} className="space-y-4">
                    <input
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        className="w-full p-3 bg-gray-800 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400"
                    />
                    <input
                        type="email"
                        placeholder="E-mail"
                        name="email"
                        className="w-full p-3 bg-gray-800 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400"
                    />
                    <textarea
                        placeholder="Your Message"
                        name="message"
                        className="w-full p-3 h-32 bg-gray-800 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400"
                    ></textarea>
                    <input
                        className="w-full p-3 bg-black text-white rounded-md hover:bg-white hover:text-black hover:border-2 hover:border-black transition duration-200"
                        type="submit"
                        value="Send"
                    />
                </form>
            </div>
        </div>
    </div>
</div>
  );
};

export default ContactUs;
