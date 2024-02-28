import React, { useState } from 'react';
import OpenAI from 'openai-api';

const Pages = () => {
  const [date, setDate] = useState('');
  const [numberOfAdults, setNumberOfAdults] = useState('');
  const [groupType, setGroupType] = useState('friends');
  const [response, setResponse] = useState('');
  const [error, setError] = useState(null);

  const handleRequest = async () => {
    const openai = new OpenAI({
      apiKey: "sk-xRWGO5HMEGpNwqzQSxTwT3BlbkFJA46DqQU0eFaQHucT3H1Qsk-Z98RyU7PemnsaKdAieWqT3BlbkFJ7bd8cWxVfSuHfJTQQBkS",
      dangerouslyAllowBrowser: true,
    });

    const dummyData = {
      location: 'goa',
      activities: 'clubs',
      month: 'march',
      adults: 2,
      children: 2,
      group: groupType,
    };

    try {
      const response = await openai.chat.completions.create({
        model: 'gpt-3.5-turbo',
        messages: [
          {
            role: 'system',
            content: 'I want you to act as a travel guide and help me plan an amazing trip. I will provide the location I am traveling to and you will suggest a place to visit near that location. In some cases, I will also give you the type of places I would like to visit. You will also suggest me places of similar type that are close to my first location. I am also providing the month I am going so if you can help me find things to do during specific months please add those too.',
          },
          {
            role: 'user',
            content: `My travel request is for ${dummyData.location} and I want to ${dummyData.activities} and I am going in ${dummyData.month}. This trip will include ${dummyData.adults} adults and ${dummyData.children} children so please provide ideas for the whole ${dummyData.group} to enjoy.`,
          },
        ],
        temperature: 1,
        max_tokens: 256,
        top_p: 1,
        frequency_penalty: 0,
        presence_penalty: 0,
      });

      console.log('Response:', response.choices[0].message.content);

      setResponse(response.choices[0].message.content);
    } catch (error) {
      console.error('Error fetching data:', error);
      setError(error.message);
    }
  };

  return (
    <div>
      <h1>Plan Your Trip</h1>
      <button onClick={handleRequest}>Plan Trip</button>
      {error && <div>{error}</div>}
      {response && <div>{response}</div>}
      <div>
        <label htmlFor="date">Date:</label>
        <input type="date" id="date" value={date} onChange={(e) => setDate(e.target.value)} />
      </div>
      <div>
        <label htmlFor="numberOfAdults">Number of Adults:</label>
        <input
          type="number"
          id="numberOfAdults"
          value={numberOfAdults}
          onChange={(e) => setNumberOfAdults(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="groupType">Traveling with:</label>
        <select id="groupType" value={groupType} onChange={(e) => setGroupType(e.target.value)}>
          <option value="friends">Friends</option>
          <option value="family">Family</option>
        </select>
      </div>
    </div>
  );
};

export default Pages;