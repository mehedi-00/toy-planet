
import { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import SingleToyCard from './singleToyCard';
import 'react-tabs/style/react-tabs.css';

const ShopCategory = () => {
    const [activeTab, setActiveTab] = useState('Cricket');
    const [toys, setToys] = useState([]);
    const tabData = [
        { id: 1, title: 'Cricket', content: toys },
        { id: 2, title: 'Football', content: toys },
        { id: 3, title: 'Badminton', content: toys },
        { id: 4, title: 'BasketBall', content: toys },
    ];
    useEffect(() => {
        fetchData(activeTab);
       
    }, [activeTab]);
    const fetchData = async (category) => {
        try {
            const response = await fetch(`http://localhost:5000/toy/${category}`);
            const data = await response.json();
            setToys(data);
        } catch (error) {
            console.error('Error fetching tab data:', error);
        }
    };
    const handleCatagery = (category) => {
        setActiveTab(category);
    };
    return (
        <div className='md:mx-20 my-32'>

            <Tabs className='mt-20'>
                <TabList >
                    {
                        tabData.map(tab => <Tab key={tab.id} onClick={() => handleCatagery(tab.title)} > {tab.title} </Tab>)
                    }

                </TabList>
                {
                tabData.map(tab => <TabPanel key={tab.id}>
                    <div className="grid md:grid-cols-3 md:mt-10 md:gap-8 ">
                        {
                            tab.content.map(toy =>
                                <SingleToyCard  key={toy._id} data={toy} />
                            )
                        }
                    </div>
                </TabPanel>)
                }



            </Tabs>
        </div>
    );
};

export default ShopCategory;