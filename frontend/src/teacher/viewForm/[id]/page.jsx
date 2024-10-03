import EditForm from "./ViewForm";

export const generateStaticParams = async () => {
  const entries = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/form/getall`).then((res) => res.json());
  console.log(entries.map(entry => entry._id));

  return entries.map((entry) => ({
    id: entry._id,
  }));
};

const ViewFormPage = ({ params }) => {
  const { id } = params;

  return <EditForm id={id} />;
}

export default ViewFormPage;
