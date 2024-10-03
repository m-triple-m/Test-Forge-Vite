import CreateForm from "./CreateForm";

export const generateStaticParams = async () => {
  const forms = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/form/getall`).then((res) => res.json());
  console.log(forms.map(form => form._id));
  
  return forms.map((form) => ({
    id: form._id,
  }));
};

const CreateFormPage = ({ params }) => {
  console.log(params);
  const { id } = params;
  
  return <CreateForm id={id} />;
}

export default CreateFormPage;
