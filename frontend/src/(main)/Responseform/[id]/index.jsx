import ResponseForm from "./Response";

export const generateStaticParams = async () => {
  const forms = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/response/getall`).then((res) => res.json());

  return forms.map((form) => ({
    id: form._id,
  }));
};

const ResponsePage = ({ params }) => {
  const { id } = params;

  return <ResponseForm id={id} />;
}

export default ResponsePage;
