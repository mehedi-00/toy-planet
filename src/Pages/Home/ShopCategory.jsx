
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

    return (
        <div className='md:mx-20 my-32'>

            <Tabs className='mt-20'>
                <TabList>
                    <Tab>Cricket</Tab>
                    <Tab>Football</Tab>
                    <Tab>Badminton</Tab>
                    <Tab>Basketball</Tab>
                </TabList>

                <TabPanel >
                    <div className="grid md:grid-cols-3 md:mt-10 md:gap-8">
                        {
                            toys.filter(toy => toy.usebCategory === 'Cricket').map(toy =>
                                <SingleToyCard key={toy._id} data={toy} />
                            )
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className="grid md:grid-cols-3 md:mt-10 md:gap-8">
                        {
                            toys.filter(toy => toy.usebCategory === 'Football').map(toy =>
                                <SingleToyCard key={toy._id} data={toy} />
                            )
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className="grid md:grid-cols-3 md:mt-10 md:gap-8">
                        {
                            toys.filter(toy => toy.usebCategory === 'Badminton').map(toy =>
                                <SingleToyCard key={toy._id} data={toy} />
                            )
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className="grid md:grid-cols-3 md:mt-10 md:gap-8">
                        {
                            toys.filter(toy => toy.usebCategory === 'BasketBall').map(toy =>
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