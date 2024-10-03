import Login from "./Student";

export const generateStaticParams = async () => {
  const forms = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/student/getall`).then((res) => res.json());

  return forms.map((form) => ({
    id: form._id,
  }));
};

const StudentPage = ({ params }) => {
  const { id } = params;

  return <Login id={id} />;
}

export default StudentPage;
