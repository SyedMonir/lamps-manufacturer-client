import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import Spinner from '../../Component/Spinner';
import auth from '../../firebase.init';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from 'recharts';

const DashboardData = () => {
  const [user, loading, uError] = useAuthState(auth);

  if (uError) {
    console.log(uError);
  }

  if (loading) {
    return <Spinner />;
  }

  if (user) {
    // console.log(user);
  }

  const data = [
    {
      name: 'Page A',
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: 'Page B',
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: 'Page C',
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: 'Page D',
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: 'Page E',
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: 'Page F',
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: 'Page G',
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];

  return (
    <div>
      <h2>Hello, {user?.displayName ? user?.displayName : 'Unnamed'}</h2>

      <section className=" py-4lg:w-1/2 w-full">
        <h2 className="ml-4 mb-4 text-xl">
          Here is our static data of total sell:
        </h2>
        <LineChart
          style={{ width: '100%', height: '100%' }}
          width={450}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis yAxisId="left" />
          <YAxis yAxisId="right" orientation="right" />
          <Tooltip />
          <Legend />
          <Line
            yAxisId="left"
            type="monotone"
            dataKey="pv"
            stroke="#8884d8"
            activeDot={{ r: 8 }}
          />
          <Line yAxisId="right" type="monotone" dataKey="uv" stroke="#82ca9d" />
        </LineChart>
      </section>
    </div>
  );
};

export default DashboardData;
