import React, { useState } from 'react';
import { ChevronRight, BookOpen, Clock } from 'lucide-react';
import { Card, CardHeader, CardContent } from '../components/ui/card';

const TimeLeapAcademy = () => {
  const [currentModule, setCurrentModule] = useState(1);
  const [currentChapter, setCurrentChapter] = useState(1);

  const modules = [
    {
      title: "Introduction to TimeLeap and its Ecosystem",
      chapters: [
        { title: "Understanding TimeLeap", difficulty: 2, readingTime: 5 },
        { title: "Overview of TimeLeap Products", difficulty: 3, readingTime: 7 },
        { title: "Course Structure and Learning Outcomes", difficulty: 1, readingTime: 3 }
      ]
    },
    {
      title: "Deep Dive into Unchained Network",
      chapters: [
        { title: "Introduction to Unchained", difficulty: 3, readingTime: 6 },
        { title: "Technical Architecture of Unchained", difficulty: 4, readingTime: 8 },
        { title: "Setting Up and Running Unchained Nodes", difficulty: 5, readingTime: 10 },
        { title: "Security and Resilience in Unchained", difficulty: 4, readingTime: 7 },
        { title: "Practical Exercises", difficulty: 5, readingTime: 15 }
      ]
    },
    // Add more modules here...
  ];

  const currentChapterContent = `
    <h2>Welcome to the TimeLeap Ecosystem</h2>
    <h3>New way to exchange value</h3>
    <p>The rise of the first blockchain application started in 2009 with Bitcoin, an independent network powering a global digital currency. Since then, blockchain technology has been used across many new applications forming a new open internet called Web3. In 2021, over 7,000 companies are building the internet infrastructure of Web3.</p>
    <p>The boom of blockchain and Web3 projects has fueled tremendous demand for web developers, software engineers, testers, UX and web designers, project and community managers. Opportunities are everywhere.</p>
    <div class="note">
      <p>Unlike Bitcoin, the "value" managed by blockchain networks is not necessarily "money"; in fact most Web3 projects provide a more human-centric definition of "value" called "utility".</p>
    </div>
    <p>Blockchain isn't just about financial transactions. Social and community tokens power new types of blockchain applications centered around human networks and the growth of these networks. They can be designed to create shared value for communities with their own rules around adoption, viral marketing, and ownership.</p>
    <p>Creators and influencers can launch their own social tokens. These tokens may or may not carry monetary value; they are simply used within the creator's community. Fans can get, transfer, donate, transact or hold these tokens. In this emerging space, we see tokens being used to drive various forms of engagement with fans, from personal reputation to active governance of the community.</p>
    <h3>New way to store changes</h3>
    <p>These social tokens are just one of the multiple new primitives from Web3, shifting the internet away from an attention economy to engagement and shared value one.</p>
    <p>Before Web3, the internet was a native mechanism to transfer what computer science refers to as state – the status of who is who, who owns what, and who has the right to do what.</p>
    <p>State is a key property for enabling human ecosystems. The ability to quickly and efficiently transfer value independently has been at the heart of exchanges between humans for centuries. When Alice gives 1 shell to Bob, their states change.</p>
    <p>Without a native mechanism to save states on the internet, exchanges could be recorded only through institutions acting as clearing entities that require our unconditional trust.</p>
    <p>Blockchain technology has introduced a decentralized method to store changes to the state of the network in an irrefutable way, without the need for intermediaries. Each participant in these networks is able to keep track, hold and transfer value independently. The network stores the history of all preceding events or user interactions as successive states.</p>
  `;

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-1/4 bg-white p-6 overflow-y-auto">
        <h1 className="text-2xl font-bold mb-6">TimeLeap Academy</h1>
        {modules.map((module, index) => (
          <div key={index} className="mb-4">
            <h2 className="text-lg font-semibold mb-2">{module.title}</h2>
            <ul>
              {module.chapters.map((chapter, chapterIndex) => (
                <li
                  key={chapterIndex}
                  className={`flex items-center justify-between p-2 rounded cursor-pointer ${
                    currentModule === index + 1 && currentChapter === chapterIndex + 1
                      ? 'bg-blue-100'
                      : 'hover:bg-gray-100'
                  }`}
                  onClick={() => {
                    setCurrentModule(index + 1);
                    setCurrentChapter(chapterIndex + 1);
                  }}
                >
                  <span>{chapter.title}</span>
                  <ChevronRight size={18} />
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6 overflow-y-auto">
        <Card className="mb-6">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <h2 className="text-2xl font-bold">
              Chapter {currentChapter}: {modules[currentModule - 1].chapters[currentChapter - 1].title}
            </h2>
          </CardHeader>
          <CardContent>
            <div className="flex items-center space-x-4 text-sm text-muted-foreground">
              <div className="flex items-center">
                <BookOpen className="mr-1 h-4 w-4" />
                Difficulty: {modules[currentModule - 1].chapters[currentChapter - 1].difficulty}/5
              </div>
              <div className="flex items-center">
                <Clock className="mr-1 h-4 w-4" />
                Estimated reading time: {modules[currentModule - 1].chapters[currentChapter - 1].readingTime} min
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="bg-white p-6 rounded-lg shadow">
          <div dangerouslySetInnerHTML={{ __html: currentChapterContent }} />
        </div>

        <div className="mt-6 flex justify-between">
          <button className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300">Previous</button>
          <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Next</button>
        </div>
      </div>
    </div>
  );
};

export default TimeLeapAcademy;
