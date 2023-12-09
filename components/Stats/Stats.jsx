"use client";
import React, {useState, useEffect} from 'react'

const stats = [
    { id: 1, name: 'Web Pages', value: '40' },
    { id: 2, name: 'Orders in all stores', value: '30000' },
    { id: 3, name: 'Users in all stores', value: '90000' },
  ]

  const Stats = () => {

    const [currentValues, setCurrentValues] = useState(stats.map(stat => 0));

    useEffect(() => {
        const intervalIds = stats.map((stat, index) => {
            return setInterval(() => {
                setCurrentValues(prevValues => {
                    const newValue = prevValues[index] + Math.ceil(stat.value / 400); // Adjust this to control the speed
                    if (newValue < stat.value) {
                        return [...prevValues.slice(0, index), newValue, ...prevValues.slice(index + 1)];
                    } else {
                        clearInterval(intervalIds[index]);
                        return [...prevValues.slice(0, index), stat.value, ...prevValues.slice(index + 1)];
                    }
                });
            }, 200); // Adjust this to control the speed
        });

        return () => intervalIds.forEach(intervalId => clearInterval(intervalId));
    }, [])

    return (
      <div className="bg-white pt-20" >
        <div className="lg:max-w-full">
          <dl className="flex gap-x-5 gap-y-16 text-center lg:grid-cols-3 align-center">
            {stats.map((stat, index) => (
              <div key={stat.id} className="mx-auto flex max-w-xs flex-col gap-y-4">
                <dt className="text-base leading-7 text-gray-600">{stat.name}</dt>
                <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                +{currentValues[index].toLocaleString()}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    )
  }

export default Stats