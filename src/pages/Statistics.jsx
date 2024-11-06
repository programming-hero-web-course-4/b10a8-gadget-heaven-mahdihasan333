import { Bar, BarChart, XAxis } from "recharts";
import Heading from "../components/Heading";
// import { useContext } from "react";
// import { levelContext } from "../root/Root";

const Statistics = () => {


    // const level = useContext(levelContext);
    // console.log(level)

  const mathMarksData = [
    { id: 1, name: "Alice", math: 78 },
    { id: 2, name: "Ale", math: 48 },
    { id: 3, name: "ice", math: 8 },
    { id: 4, name: "afdAlice", math: 78 },
    { id: 5, name: "Aldfasce", math: 70 },
    { id: 6, name: "Aliceasd", math: 38 },
    { id: 7, name: "Aliceda", math: 68 },
    { id: 8, name: "Aliasdfce", math: 78 },
    { id: 9, name: "Alie", math: 28 },
    { id: 10, name: "Alisadce", math: 88 },
  ];

  return (
    <div>
      <div className="text-center bg-primary py-8">
        <Heading
          title="Statistics"
          subtitle="Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!"
        />
      </div>

      <div className="my-6 container mx-auto text-black">
        <h3 className="text-3xl font-bold">Statistic</h3>
      </div>

      <div className="container mx-auto">
        <BarChart width={730} height={250} data={mathMarksData}>
            <Bar dataKey={'math'} fill="#9538E2"></Bar>
            <XAxis/>
        </BarChart>
      </div>
    </div>
  );
};

export default Statistics;
