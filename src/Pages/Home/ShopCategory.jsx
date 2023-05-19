
import { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import SingleToyCard from './singleToyCard';
import 'react-tabs/style/react-tabs.css';
const ShopCategory = () => {
    const [toys, setToys] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/alltoy')
            .then(res => res.json())
            .then(data => setToys(data));
    }, []);

    const handleCatagery = category=>{
        // console.log(category);
    }

    return (
        <div className='md:mx-20 my-32'>

            <Tabs className='mt-20'>
                <TabList>
                    <Tab onClick={()=>handleCatagery('Cricket')}>Cricket</Tab>
                    <Tab onClick={()=>handleCatagery('Football')}>Football</Tab>
                    <Tab>Badminton</Tab>
                    <Tab>Basketball</Tab>
                </TabList>

                <TabPanel >
                    <div className="grid md:grid-cols-3 md:mt-10 md:gap-8 ">
                        {
                            toys.filter(toy => toy.subcategory === 'Cricket').map(toy =>
                                <SingleToyCard key={toy._id} data={toy} />
                            )
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className="grid md:grid-cols-3 md:mt-10 md:gap-8">
                        {
                            toys.filter(toy => toy.subcategory === 'Football').map(toy =>
                                <SingleToyCard key={toy._id} data={toy} />
                            )
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className="grid md:grid-cols-3 md:mt-10 md:gap-8">
                        {
                            toys.filter(toy => toy.subcategory === 'Badminton').map(toy =>
                                <SingleToyCard key={toy._id} data={toy} />
                            )
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className="grid md:grid-cols-3 md:mt-10 md:gap-8">
                        {
                            toys.filter(toy => toy.subcategory === 'BasketBall').map(toy =>
                                <SingleToyCard key={toy._id} data={toy} />
                            )
                        }
                    </div>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default ShopCategory;