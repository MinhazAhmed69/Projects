// const data = {
//     'QuestionBank':[
//         {
//             'Difficulty': '2',
//             'Question': 'Yellow',
//             'Options': ['Banana', 'Orange', 'Apple', 'MElon'],
//             'Answer': 0,
//             'Explanation' : 'Source'
//         },
//         {
//             'Difficulty': '2',
//             'Question': 'Green',
//             'Options': ['Potato', 'Carrot', 'Tomato', 'Cucumber'],
//             'Answer': 3,
//             'Explanation' : 'Source'
//         }
//     ]
// };
const data = [
    {
        "Difficulty":3,
        "Question": "A factory can produce x units of a product in y hours. If the factory operates continuously for z hours, how many units of the product will be produced?",
        "Options": ["A) x + y", "B) xy", "C) xy/z", "D) xz/y"],
        "Answer": 3,
        "Explanation": "The rate at which the factory produces the product is x/y units per hour. In z hours, it will produce (x/y) * z = xz/y units."
    },
    {
        "Difficulty":3,
        "Question": "If 3x - 2y = 12 and 4x + 5y = 21, what is the value of x + y?",
        "Options": ["A) 2", "B) 3", "C) 4", "D) 5"],
        "Answer": 2,
        "Explanation": "Add the two equations to eliminate y: 3x - 2y + 4x + 5y = 12 + 21. Simplify to get 7x + 3y = 33. Solving for x + y, you get x + y = 33/7 = 4.71."
    },
    {
        "Difficulty": 2,
        "Question": "A car travels 300 miles in 5 hours. What is its speed in miles per hour (mph)?",
        "Options": ["A) 55 mph", "B) 60 mph", "C) 65 mph", "D) 70 mph"],
        "Answer":1,
        "Explanation": "Speed is calculated as distance divided by time: Speed = Distance / Time = 300 / 5 = 60 mph."
    },
    {
        "Difficulty": 2,
        "Question": "If x = 3^4 and y = 3^2, what is x/y?",
        "Options": ["A) 3", "B) 9", "C) 27", "D) 81"],
        "Answer":1,
        "Explanation": "x/y = (3^4) / (3^2) = 3^(4-2) = 3^2 = 9."
    },
    {
        "Difficulty": 3,
        "Question": "A rectangle has a length of 8 units and an area of 40 square units. What is its width?",
        "Options": ["A) 5 units", "B) 3 units", "C) 4 units", "D) 2 units"],
        "Answer":0,
        "Explanation": "The area of a rectangle is given by Area = Length * Width. Given the area (40) and length (8), you can find the width: 40 = 8 * Width. Solving for Width, you get Width = 40 / 8 = 5 units."
    },
    {
        "Difficulty":3,
        "Question": "If 2x - 3y = 7 and 4x + y = 5, what is the value of x?",
        "Options": ["A) 1", "B) 2", "C) 3", "D) 4"],
        "Answer":1,
        "Explanation": "Solve the system of equations to find x. You can eliminate y by multiplying the second equation by 3 and adding the two equations. You'll find x = 3 - 1 = 2."
    },
    {
        "Difficulty": 2,
        "Question": "A library has 300 books. If 25% of the books are fiction, how many fiction books are there?",
        "Options": ["A) 50 books", "B) 75 books", "C) 100 books", "D) 125 books"],
        "Answer": 1,
        "Explanation": "25% of 300 is 0.25 * 300 = 75."
    },
    {
        "Difficulty": 3,
        "Question": "If a^3 = 64, what is the value of a?",
        "Options": ["A) 4", "B) 6", "C) 8", "D) 2"],
        "Answer": 0,
        "Explanation": "a^3 = 64 implies a = ∛64 = 4."
    },
    {
        "Difficulty": 2,
        "Question": "A train travels 240 miles in 4 hours. What is its average speed in miles per hour (mph)?",
        "Options": ["A) 60 mph", "B) 40 mph", "C) 80 mph", "D) 100 mph"],
        "Answer": 0,
        "Explanation": "Average speed is calculated as total distance divided by total time: Average Speed = Total Distance / Total Time = 240 / 4 = 60 mph."
    },
    {
        "Difficulty": 3,
        "Question": "If 2^x = 32, what is the value of x?",
        "Options": ["A) 4", "B) 5", "C) 3", "D) 6"],
        "Answer":1,
        "Explanation": "2^x = 32 implies x = log2(32) = 5."
    },

        {
            "Difficulty": 3,
            "Question": "If 4x - 3y = 9 and 2x + y = 6, what is the value of x?",
            "Options": ["A) 1", "B) 2", "C) 3", "D) 4"],
            "Answer": 2,
            "Explanation": "Solve the system of equations to find x. You can eliminate y by multiplying the second equation by 3 and subtracting it from the first equation. You'll find x = 2."
        },
        {
            "Difficulty": 3,
            "Question": "A rectangular garden has a length of 12 feet and a width of 5 feet. What is its area in square feet?",
            "Options": ["A) 17 sq. ft.", "B) 35 sq. ft.", "C) 60 sq. ft.", "D) 24 sq. ft."],
            "Answer": 2,
            "Explanation": "The area of a rectangle is given by Area = Length * Width. Given the length (12 feet) and width (5 feet), you can find the area: 12 * 5 = 60 square feet."
        },
        {
            "Difficulty": 2,
            "Question": "If a^2 = 25, what is the value of a?",
            "Options": ["A) 5", "B) 10", "C) 3", "D) 15"],
            "Answer": 0,
            "Explanation": "a^2 = 25 implies a = √25 = 5."
        },
        {
            "Difficulty": 3,
            "Question": "A car travels 150 miles in 2.5 hours. What is its average speed in miles per hour (mph)?",
            "Options": ["A) 45 mph", "B) 60 mph", "C) 70 mph", "D) 75 mph"],
            "Answer": 1,
            "Explanation": "Average speed is calculated as total distance divided by total time: Average Speed = Total Distance / Total Time = 150 / 2.5 = 60 mph."
        },
        {
            "Difficulty": 2,
            "Question": "If 3x - 4y = 20 and 2x + 2y = 10, what is the value of x?",
            "Options": ["A) 4", "B) 3", "C) 2", "D) 1"],
            "Answer": 1,
            "Explanation": "Solve the system of equations to find x. You can eliminate y by adding the two equations. You'll find x = 3."
        },
        {
            "Difficulty": 2,
            "Question": "A store offers a 20% discount on an item priced at $50. What is the final price of the item after the discount?",
            "Options": ["A) $40", "B) $45", "C) $10", "D) $60"],
            "Answer": 0,
            "Explanation": "A 20% discount on a $50 item is 0.2 * $50 = $10. Subtract this discount from the original price to get the final price: $50 - $10 = $40."
        },
        {
            "Difficulty": 3,
            "Question": "If 5^x = 125, what is the value of x?",
            "Options": ["A) 2", "B) 3", "C) 4", "D) 5"],
            "Answer": 1,
            "Explanation": "5^x = 125 implies x = log5(125) = 3."
        },
        {
            "Difficulty": 2,
            "Question": "A train travels 180 miles in 3 hours. What is its average speed in miles per hour (mph)?",
            "Options": ["A) 60 mph", "B) 40 mph", "C) 75 mph", "D) 90 mph"],
            "Answer": 0,
            "Explanation": "Average speed is calculated as total distance divided by total time: Average Speed = Total Distance / Total Time = 180 / 3 = 60 mph."
        },
        {
            "Difficulty": 3,
            "Question": "If 3^x = 27, what is the value of x?",
            "Options": ["A) 2", "B) 3", "C) 4", "D) 5"],
            "Answer": 1,
            "Explanation": "3^x = 27 implies x = log3(27) = 3."
        },
        {
            "Difficulty": 3,
            "Question": "A circular swimming pool has a radius of 10 feet. What is its circumference in feet?",
            "Options": ["A) 20π feet", "B) 10π feet", "C) 30π feet", "D) 40π feet"],
            "Answer": 3,
            "Explanation": "The circumference of a circle is given by Circumference = 2π * Radius. Given the radius (10 feet), you can find the circumference: 2π * 10 = 20π feet."
        },
        
         
                {
                    "Difficulty": 1,
                    "Question": "If 2x + 3y = 12 and 3x - 2y = 5, what is the value of y?",
                    "Options": ["A) 1", "B) 2", "C) 3", "D) 4"],
                    "Answer": 0,
                    "Explanation": "Solve the system of equations to find y. You can eliminate x by multiplying the second equation by 2 and adding it to the first equation. You'll find y = 1."
                },
                {
                    "Difficulty": 1,
                    "Question": "A square has a side length of 8 cm. What is its area in square centimeters?",
                    "Options": ["A) 16 sq. cm.", "B) 32 sq. cm.", "C) 64 sq. cm.", "D) 128 sq. cm."],
                    "Answer": 2,
                    "Explanation": "The area of a square is given by Area = Side Length^2. Given the side length (8 cm), you can find the area: 8^2 = 64 square centimeters."
                },
                {
                    "Difficulty": 1,
                    "Question": "If b^2 = 49, what is the value of b?",
                    "Options": ["A) 7", "B) 14", "C) 21", "D) 28"],
                    "Answer": 0,
                    "Explanation": "b^2 = 49 implies b = √49 = 7."
                },
                {
                    "Difficulty": 1,
                    "Question": "A bicycle travels 20 miles in 1 hour. What is its average speed in miles per hour (mph)?",
                    "Options": ["A) 10 mph", "B) 15 mph", "C) 20 mph", "D) 25 mph"],
                    "Answer": 2,
                    "Explanation": "Average speed is calculated as total distance divided by total time: Average Speed = Total Distance / Total Time = 20 / 1 = 20 mph."
                },
                {
                    "Difficulty": 1,
                    "Question": "If 5x + 2y = 15 and 2x - 3y = 4, what is the value of y?",
                    "Options": ["A) 1", "B) 2", "C) 3", "D) 4"],
                    "Answer": 0,
                    "Explanation": "Solve the system of equations to find y. You can eliminate x by multiplying the second equation by 5 and adding it to the first equation. You'll find y = 1."
                },
                
                    
                        {
                            "Difficulty": 1,
                            "Question": "If 3a - 2b = 7 and 2a + 3b = 8, what is the value of a?",
                            "Options": ["A) 2", "B) 3", "C) 4", "D) 5"],
                            "Answer": 0,
                            "Explanation": "Solve the system of equations to find a. You can eliminate b by multiplying the first equation by 3 and the second equation by 2, and then subtracting them. You'll find a = 2."
                        },
                        {
                            "Difficulty": 1,
                            "Question": "A triangle has a base of 6 cm and a height of 4 cm. What is its area in square centimeters?",
                            "Options": ["A) 8 sq. cm.", "B) 12 sq. cm.", "C) 18 sq. cm.", "D) 24 sq. cm."],
                            "Answer": 1,
                            "Explanation": "The area of a triangle is given by Area = (Base * Height) / 2. Given the base (6 cm) and height (4 cm), you can find the area: (6 * 4) / 2 = 12 square centimeters."
                        },
                        {
                            "Difficulty": 1,
                            "Question": "If c^2 = 36, what is the value of c?",
                            "Options": ["A) 6", "B) 12", "C) 18", "D) 24"],
                            "Answer": 0,
                            "Explanation": "c^2 = 36 implies c = √36 = 6."
                        },
                        {
                            "Difficulty": 1,
                            "Question": "A car travels 150 kilometers in 2 hours. What is its average speed in kilometers per hour (km/h)?",
                            "Options": ["A) 50 km/h", "B) 75 km/h", "C) 100 km/h", "D) 125 km/h"],
                            "Answer": 1,
                            "Explanation": "Average speed is calculated as total distance divided by total time: Average Speed = Total Distance / Total Time = 150 / 2 = 75 km/h."
                        },
                        {
                            "Difficulty": 1,
                            "Question": "If 4x + 3y = 20 and 3x - y = 11, what is the value of y?",
                            "Options": ["A) 1", "B) 2", "C) 3", "D) 4"],
                            "Answer": 0,
                            "Explanation": "Solve the system of equations to find y. You can eliminate x by multiplying the second equation by 4 and adding it to the first equation. You'll find y = 1."
                        },
                        
                            
                                {
                                    "Difficulty": 1,
                                    "Question": "If 2x - 3y = 6 and 3x + 2y = 11, what is the value of x?",
                                    "Options": ["A) 1", "B) 2", "C) 3", "D) 4"],
                                    "Answer": 3,
                                    "Explanation": "Solve the system of equations to find x. You can eliminate y by multiplying the second equation by 3 and subtracting it from the first equation. You'll find x = 3."
                                },
                                {
                                    "Difficulty": 1,
                                    "Question": "A rectangular garden has a length of 8 feet and a width of 6 feet. What is its area in square feet?",
                                    "Options": ["A) 12 sq. ft.", "B) 24 sq. ft.", "C) 48 sq. ft.", "D) 56 sq. ft."],
                                    "Answer": 2,
                                    "Explanation": "The area of a rectangle is given by Area = Length * Width. Given the length (8 feet) and width (6 feet), you can find the area: 8 * 6 = 48 square feet."
                                },
                                {
                                    "Difficulty": 1,
                                    "Question": "If p^2 = 16, what is the value of p?",
                                    "Options": ["A) 4", "B) 8", "C) 12", "D) 16"],
                                    "Answer": 0,
                                    "Explanation": "p^2 = 16 implies p = √16 = 4."
                                },
                                {
                                    "Difficulty": 1,
                                    "Question": "A bicycle travels 15 miles in 1 hour. What is its average speed in miles per hour (mph)?",
                                    "Options": ["A) 15 mph", "B) 10 mph", "C) 20 mph", "D) 30 mph"],
                                    "Answer": 0,
                                    "Explanation": "Average speed is calculated as total distance divided by total time: Average Speed = Total Distance / Total Time = 15 / 1 = 15 mph."
                                },
                                {
                                    "Difficulty": 1,
                                    "Question": "If 5x + 2y = 14 and 2x - 3y = 8, what is the value of x?",
                                    "Options": ["A) 2", "B) 3", "C) 4", "D) 5"],
                                    "Answer": 3,
                                    "Explanation": "Solve the system of equations to find x. You can eliminate y by multiplying the second equation by 5 and subtracting it from the first equation. You'll find x = 3."
                                },
                                {
                                    "Difficulty": 2,
                                    "Question": "If 4x - 3y = 9 and 2x + y = 6, what is the value of x?",
                                    "Options": ["A) 1", "B) 2", "C) 3", "D) 4"],
                                    "Answer": 2,
                                    "Explanation": "Solve the system of equations to find x. You can eliminate y by multiplying the second equation by 3 and subtracting it from the first equation. You'll find x = 2."
                                },
                                {
                                    "Difficulty": 2,
                                    "Question": "A rectangular garden has a length of 12 feet and a width of 5 feet. What is its area in square feet?",
                                    "Options": ["A) 17 sq. ft.", "B) 35 sq. ft.", "C) 60 sq. ft.", "D) 24 sq. ft."],
                                    "Answer": 2,
                                    "Explanation": "The area of a rectangle is given by Area = Length * Width. Given the length (12 feet) and width (5 feet), you can find the area: 12 * 5 = 60 square feet."
                                },
                                {
                                    "Difficulty": 2,
                                    "Question": "If a^2 = 25, what is the value of a?",
                                    "Options": ["A) 5", "B) 10", "C) 3", "D) 15"],
                                    "Answer": 0,
                                    "Explanation": "a^2 = 25 implies a = √25 = 5."
                                },
                                {
                                    "Difficulty": 2,
                                    "Question": "A car travels 150 miles in 2.5 hours. What is its average speed in miles per hour (mph)?",
                                    "Options": ["A) 45 mph", "B) 60 mph", "C) 70 mph", "D) 75 mph"],
                                    "Answer": 1,
                                    "Explanation": "Average speed is calculated as total distance divided by total time: Average Speed = Total Distance / Total Time = 150 / 2.5 = 60 mph."
                                },
                                {
                                    "Difficulty": 2,
                                    "Question": "If 3x - 4y = 20 and 2x + 2y = 10, what is the value of x?",
                                    "Options": ["A) 4", "B) 3", "C) 2", "D) 1"],
                                    "Answer": 1,
                                    "Explanation": "Solve the system of equations to find x. You can eliminate y by adding the two equations. You'll find x = 3."
                                },
                                
                                
                                        {
                                            "Difficulty": 2,
                                            "Question": "A store offers a 20% discount on an item priced at $50. What is the final price of the item after the discount?",
                                            "Options": ["A) $40", "B) $45", "C) $10", "D) $60"],
                                            "Answer": 0,
                                            "Explanation": "A 20% discount on a $50 item is 0.2 * $50 = $10. Subtract this discount from the original price to get the final price: $50 - $10 = $40."
                                        },
                                        {
                                            "Difficulty": 2,
                                            "Question": "If 5^x = 125, what is the value of x?",
                                            "Options": ["A) 2", "B) 3", "C) 4", "D) 5"],
                                            "Answer": 1,
                                            "Explanation": "5^x = 125 implies x = log5(125) = 3."
                                        },
                                        {
                                            "Difficulty": 2,
                                            "Question": "A train travels 180 miles in 3 hours. What is its average speed in miles per hour (mph)?",
                                            "Options": ["A) 60 mph", "B) 40 mph", "C) 75 mph", "D) 90 mph"],
                                            "Answer": 0,
                                            "Explanation": "Average speed is calculated as total distance divided by total time: Average Speed = Total Distance / Total Time = 180 / 3 = 60 mph."
                                        },
                                        {
                                            "Difficulty": 2,
                                            "Question": "If 3^x = 27, what is the value of x?",
                                            "Options": ["A) 2", "B) 3", "C) 4", "D) 5"],
                                            "Answer": 1,
                                            "Explanation": "3^x = 27 implies x = log3(27) = 3."
                                        },
                                        {
                                            "Difficulty": 2,
                                            "Question": "A circular swimming pool has a radius of 10 feet. What is its circumference in feet?",
                                            "Options": ["A) 20π feet", "B) 10π feet", "C) 30π feet", "D) 40π feet"],
                                            "Answer": 3,
                                            "Explanation": "The circumference of a circle is given by Circumference = 2π * Radius. Given the radius (10 feet), you can find the circumference: 2π * 10 = 20π feet."
                                        },
                                        
                                           
                                                {
                                                    "Difficulty": 3,
                                                    "Question": "If 4x - 3y = 9 and 2x + y = 6, what is the value of x?",
                                                    "Options": ["A) 1", "B) 2", "C) 3", "D) 4"],
                                                    "Answer": 2,
                                                    "Explanation": "Solve the system of equations to find x. You can eliminate y by multiplying the second equation by 3 and subtracting it from the first equation. You'll find x = 2."
                                                },
                                                {
                                                    "Difficulty": 3,
                                                    "Question": "A rectangular garden has a length of 12 feet and a width of 5 feet. What is its area in square feet?",
                                                    "Options": ["A) 17 sq. ft.", "B) 35 sq. ft.", "C) 60 sq. ft.", "D) 24 sq. ft."],
                                                    "Answer": 2,
                                                    "Explanation": "The area of a rectangle is given by Area = Length * Width. Given the length (12 feet) and width (5 feet), you can find the area: 12 * 5 = 60 square feet."
                                                },
                                                {
                                                    "Difficulty": 3,
                                                    "Question": "A car travels 150 miles in 2.5 hours. What is its average speed in miles per hour (mph)?",
                                                    "Options": ["A) 45 mph", "B) 60 mph", "C) 70 mph", "D) 75 mph"],
                                                    "Answer": 1,
                                                    "Explanation": "Average speed is calculated as total distance divided by total time: Average Speed = Total Distance / Total Time = 150 / 2.5 = 60 mph."
                                                },
                                                {
                                                    "Difficulty": 3,
                                                    "Question": "If 5^x = 125, what is the value of x?",
                                                    "Options": ["A) 2", "B) 3", "C) 4", "D) 5"],
                                                    "Answer": 1,
                                                    "Explanation": "5^x = 125 implies x = log5(125) = 3."
                                                },
                                                {
                                                    "Difficulty": 3,
                                                    "Question": "If 3x - 4y = 20 and 2x + 2y = 10, what is the value of x?",
                                                    "Options": ["A) 4", "B) 3", "C) 2", "D) 1"],
                                                    "Answer": 1,
                                                    "Explanation": "Solve the system of equations to find x. You can eliminate y by adding the two equations. You'll find x = 3."
                                                },
                                                
                                                        {
                                                            "Difficulty": 3,
                                                            "Question": "A train travels 180 miles in 3 hours. What is its average speed in miles per hour (mph)?",
                                                            "Options": ["A) 60 mph", "B) 40 mph", "C) 75 mph", "D) 90 mph"],
                                                            "Answer": 0,
                                                            "Explanation": "Average speed is calculated as total distance divided by total time: Average Speed = Total Distance / Total Time = 180 / 3 = 60 mph."
                                                        },
                                                        {
                                                            "Difficulty": 3,
                                                            "Question": "If 3^x = 27, what is the value of x?",
                                                            "Options": ["A) 2", "B) 3", "C) 4", "D) 5"],
                                                            "Answer": 1,
                                                            "Explanation": "3^x = 27 implies x = log3(27) = 3."
                                                        },
                                                        {
                                                            "Difficulty": 3,
                                                            "Question": "A circular swimming pool has a radius of 10 feet. What is its circumference in feet?",
                                                            "Options": ["A) 20π feet", "B) 10π feet", "C) 30π feet", "D) 40π feet"],
                                                            "Answer": 3,
                                                            "Explanation": "The circumference of a circle is given by Circumference = 2π * Radius. Given the radius (10 feet), you can find the circumference: 2π * 10 = 20π feet."
                                                        },
                                                        {
                                                            "Difficulty": 3,
                                                            "Question": "If 2x + 3y = 12 and 3x - 2y = 5, what is the value of y?",
                                                            "Options": ["A) 1", "B) 2", "C) 3", "D) 4"],
                                                            "Answer": 1,
                                                            "Explanation": "Solve the system of equations to find y. You can eliminate x by multiplying the second equation by 2 and adding it to the first equation. You'll find y = 1."
                                                        },
                                                        {
                                                            "Difficulty": 3,
                                                            "Question": "A cube has a volume of 125 cubic inches. What is the length of one side of the cube in inches?",
                                                            "Options": ["A) 5 inches", "B) 10 inches", "C) 25 inches", "D) 50 inches"],
                                                            "Answer": 0,
                                                            "Explanation": "The volume of a cube is given by Volume = Side Length^3. Given the volume (125 cubic inches), you can find the side length: (Side Length)^3 = 125, so Side Length = ∛125 = 5 inches."
                                                        },
                                                    
                                                        
                                                                {
                                                                    "Difficulty": 1,
                                                                    "Question": "What is 2 + 3?",
                                                                    "Options": ["A) 4", "B) 5", "C) 6", "D) 7"],
                                                                    "Answer": 1,
                                                                    "Explanation": "2 + 3 = 5."
                                                                },
                                                                {
                                                                    "Difficulty": 1,
                                                                    "Question": "How many sides does a triangle have?",
                                                                    "Options": ["A) 2", "B) 3", "C) 4", "D) 5"],
                                                                    "Answer": 1,
                                                                    "Explanation": "A triangle has 3 sides."
                                                                },
                                                                {
                                                                    "Difficulty": 1,
                                                                    "Question": "What is the capital of France?",
                                                                    "Options": ["A) London", "B) Berlin", "C) Madrid", "D) Paris"],
                                                                    "Answer": 3,
                                                                    "Explanation": "The capital of France is Paris."
                                                                },
                                                                {
                                                                    "Difficulty": 1,
                                                                    "Question": "How many days are there in a week?",
                                                                    "Options": ["A) 5", "B) 6", "C) 7", "D) 8"],
                                                                    "Answer": 2,
                                                                    "Explanation": "There are 7 days in a week."
                                                                },
                                                                {
                                                                    "Difficulty": 1,
                                                                    "Question": "What is 4 multiplied by 6?",
                                                                    "Options": ["A) 20", "B) 24", "C) 30", "D) 16"],
                                                                    "Answer": 1,
                                                                    "Explanation": "4 multiplied by 6 equals 24."
                                                                },
                                                               
                                                                        {
                                                                            "Difficulty": 1,
                                                                            "Question": "How many fingers does a person typically have on one hand?",
                                                                            "Options": ["A) 4", "B) 5", "C) 6", "D) 7"],
                                                                            "Answer": 1,
                                                                            "Explanation": "A person typically has 5 fingers on one hand."
                                                                        },
                                                                        {
                                                                            "Difficulty": 1,
                                                                            "Question": "What color is the sky on a clear day?",
                                                                            "Options": ["A) Green", "B) Yellow", "C) Blue", "D) Red"],
                                                                            "Answer": 2,
                                                                            "Explanation": "The sky is typically blue on a clear day."
                                                                        },
                                                                        {
                                                                            "Difficulty": 1,
                                                                            "Question": "What comes after the letter 'B' in the alphabet?",
                                                                            "Options": ["A) A", "B) C", "C) D", "D) E"],
                                                                            "Answer": 1,
                                                                            "Explanation": "After 'B' comes 'C' in the alphabet."
                                                                        },
                                                                        {
                                                                            "Difficulty": 1,
                                                                            "Question": "How many wheels does a bicycle usually have?",
                                                                            "Options": ["A) 1", "B) 2", "C) 3", "D) 4"],
                                                                            "Answer": 1,
                                                                            "Explanation": "A bicycle typically has 2 wheels."
                                                                        },
                                                                        {
                                                                            "Difficulty": 1,
                                                                            "Question": "What is the opposite of 'hot'?",
                                                                            "Options": ["A) Cold", "B) Tall", "C) Fast", "D) Small"],
                                                                            "Answer": 0,
                                                                            "Explanation": "The opposite of 'hot' is 'cold'."
                                                                        },
                                                                                {
                                                                                    "Difficulty": 2,
                                                                                    "Question": "Solve for x: 4x^2 - 9 = 0.",
                                                                                    "Options": ["A) x = 3/2", "B) x = -3/2", "C) x = 3", "D) x = -3"],
                                                                                    "Answer": 0,
                                                                                    "Explanation": "This is a quadratic equation. Use the quadratic formula to solve for x. The solutions are x = 3/2 and x = -3/2."
                                                                                },
                                                                                {
                                                                                    "Difficulty": 2,
                                                                                    "Question": "What is the value of 'pi' (π) correct to five decimal places?",
                                                                                    "Options": ["A) 3.14159", "B) 3.14160", "C) 3.14161", "D) 3.14162"],
                                                                                    "Answer": 0,
                                                                                    "Explanation": "The value of 'pi' (π) correct to five decimal places is 3.14159."
                                                                                },
                                                                                {
                                                                                    "Difficulty": 2,
                                                                                    "Question": "Simplify the expression: (2x^2 * y^3) / (4x^2).",
                                                                                    "Options": ["A) y^3/2", "B) (y^3)/(2x^2)", "C) (y^3)/(4x^2)", "D) 2y^3"],
                                                                                    "Answer": 0,
                                                                                    "Explanation": "To simplify, cancel out common terms in the numerator and denominator. The result is y^3/2."
                                                                                },
                                                                                {
                                                                                    "Difficulty": 2,
                                                                                    "Question": "If log(base 2) of x is 3, what is the value of x?",
                                                                                    "Options": ["A) 2", "B) 6", "C) 8", "D) 12"],
                                                                                    "Answer": 2,
                                                                                    "Explanation": "If log(base 2) of x is 3, it means 2^3 = x, so x = 8."
                                                                                },
                                                                                {
                                                                                    "Difficulty": 2,
                                                                                    "Question": "A car accelerates from 20 m/s to 40 m/s in 4 seconds. What is the acceleration?",
                                                                                    "Options": ["A) 5 m/s^2", "B) 10 m/s^2", "C) 20 m/s^2", "D) 40 m/s^2"],
                                                                                    "Answer": 1,
                                                                                    "Explanation": "Acceleration is the change in velocity divided by time. In this case, (40 m/s - 20 m/s) / 4 s = 10 m/s^2."
                                                                                },
                                                                                
                                                                                        {
                                                                                            "Difficulty": 3,
                                                                                            "Question": "Solve the differential equation: dy/dx = 2x - y.",
                                                                                            "Options": ["A) y = (2x - 1) * e^(-x)", "B) y = (2x + 1) * e^(-x)", "C) y = (2x + 1) * e^(x)", "D) y = (2x - 1) * e^(x)"],
                                                                                            "Answer": 0,
                                                                                            "Explanation": "This is a first-order linear differential equation. Solve it using an integrating factor. The solution is y = (2x - 1) * e^(-x)."
                                                                                        },
                                                                                        {
                                                                                            "Difficulty": 3,
                                                                                            "Question": "Find the limit as x approaches 0 of (sin(3x) / (2x)).",
                                                                                            "Options": ["A) 1", "B) 3", "C) 0", "D) ∞"],
                                                                                            "Answer": 1,
                                                                                            "Explanation": "Apply L'Hôpital's Rule to find the limit. The result is 3."
                                                                                        },
                                                                                        {
                                                                                            "Difficulty": 3,
                                                                                            "Question": "What is the integral of (x^2 * e^x) dx?",
                                                                                            "Options": ["A) (x^2 - 2x + 2) * e^x + C", "B) (x^2 + 2x + 2) * e^x + C", "C) (x^2 + 2x + 1) * e^x + C", "D) (x^2 - 2x + 1) * e^x + C"],
                                                                                            "Answer": 2,
                                                                                            "Explanation": "Use integration by parts to find the integral. The correct answer is (x^2 + 2x + 1) * e^x + C."
                                                                                        },
                                                                                        {
                                                                                            "Difficulty": 3,
                                                                                            "Question": "What is the eigenvalue of the matrix [[3, 1], [1, 3]]?",
                                                                                            "Options": ["A) 2", "B) 3", "C) 4", "D) 5"],
                                                                                            "Answer": 0,
                                                                                            "Explanation": "To find eigenvalues, solve the characteristic equation. The eigenvalue is 2."
                                                                                        },
                                                                                        {
                                                                                            "Difficulty": 3,
                                                                                            "Question": "A particle undergoes simple harmonic motion with an amplitude of 5 cm and a frequency of 2 Hz. What is the maximum velocity of the particle?",
                                                                                            "Options": ["A) 10π cm/s", "B) 10 cm/s", "C) 5π cm/s", "D) 5 cm/s"],
                                                                                            "Answer": 0,
                                                                                            "Explanation": "The maximum velocity in simple harmonic motion is given by Aω, where A is the amplitude and ω is the angular frequency. In this case, it's 5 * 2π = 10π cm/s."
                                                                                        },
                                                                                        
                                                                                                {
                                                                                                    "Difficulty": 3,
                                                                                                    "Question": "A car accelerates uniformly from rest to a speed of 25 m/s in 5 seconds. What is the car's acceleration?",
                                                                                                    "Options": ["A) 2 m/s²", "B) 5 m/s²", "C) 10 m/s²", "D) 25 m/s²"],
                                                                                                    "Answer": 2,
                                                                                                    "Explanation": "Acceleration is given by the change in velocity divided by the time. In this case, it's (25 m/s - 0) / 5 s = 5 m/s²."
                                                                                                },
                                                                                                {
                                                                                                    "Difficulty": 3,
                                                                                                    "Question": "A wire has a resistance of 4 ohms. If a current of 2 A flows through it, what is the voltage across the wire?",
                                                                                                    "Options": ["A) 1 V", "B) 2 V", "C) 4 V", "D) 8 V"],
                                                                                                    "Answer": 2,
                                                                                                    "Explanation": "Ohm's law states that V = I * R, where V is voltage, I is current, and R is resistance. In this case, it's 2 A * 4 ohms = 8 V."
                                                                                                },
                                                                                                {
                                                                                                    "Difficulty": 3,
                                                                                                    "Question": "A ball is thrown vertically upward with an initial velocity of 20 m/s. How high does it go?",
                                                                                                    "Options": ["A) 20 m", "B) 40 m", "C) 60 m", "D) 80 m"],
                                                                                                    "Answer": 2,
                                                                                                    "Explanation": "Use the kinematic equation: h = (v^2 - u^2) / (2g), where h is height, v is final velocity, u is initial velocity, and g is acceleration due to gravity. The answer is 60 m."
                                                                                                },
                                                                                                {
                                                                                                    "Difficulty": 3,
                                                                                                    "Question": "What is the sum of the interior angles of a decagon (10-sided polygon)?",
                                                                                                    "Options": ["A) 120°", "B) 140°", "C) 160°", "D) 180°"],
                                                                                                    "Answer": 2,
                                                                                                    "Explanation": "The sum of the interior angles of a polygon with n sides is given by (n-2) * 180°. For a decagon, it's (10-2) * 180° = 160°."
                                                                                                },
                                                                                                {
                                                                                                    "Difficulty": 3,
                                                                                                    "Question": "A spherical balloon is inflated at a rate of 5 cm³/s. How fast is the radius increasing when the radius is 10 cm?",
                                                                                                    "Options": ["A) 0.5 cm/s", "B) 1 cm/s", "C) 2 cm/s", "D) 5 cm/s"],
                                                                                                    "Answer": 2,
                                                                                                    "Explanation": "Use the formula for the volume of a sphere and related rates to find the rate of change of the radius. The answer is 2 cm/s."
                                                                                                },
                                                                                                {
                                                                                                    "Difficulty": 3,
                                                                                                    "Question": "In a chemical reaction, 0.1 moles of substance A reacts with 0.2 moles of substance B to produce 0.3 moles of a product. What is the limiting reactant?",
                                                                                                    "Options": ["A) A", "B) B", "C) Both A and B", "D) Neither A nor B"],
                                                                                                    "Answer": 0,
                                                                                                    "Explanation": "To find the limiting reactant, compare the mole ratios. In this case, A is the limiting reactant."
                                                                                                },
                                                                                                {
                                                                                                    "Difficulty": 3,
                                                                                                    "Question": "Solve the trigonometric equation: sin(x) + cos(x) = 1.",
                                                                                                    "Options": ["A) x = π/2", "B) x = π/4", "C) x = 3π/4", "D) x = 0"],
                                                                                                    "Answer": 1,
                                                                                                    "Explanation": "Solve the equation for x to find x = π/4."
                                                                                                },
                                                                                                {
                                                                                                    "Difficulty": 3,
                                                                                                    "Question": "A rocket is launched with an initial velocity of 50 m/s upward. How high does it go and how long does it take to reach its highest point?",
                                                                                                    "Options": ["A) 125 m, 2.5 s", "B) 100 m, 5 s", "C) 250 m, 5 s", "D) 200 m, 2.5 s"],
                                                                                                    "Answer": 0,
                                                                                                    "Explanation": "Use kinematic equations to find the height and time. The answer is 125 m and 2.5 s."
                                                                                                },
                                                                                                {
                                                                                                    "Difficulty": 3,
                                                                                                    "Question": "If f(x) = x^3 - 4x^2 + 5x - 2, find f'(x) and f''(x).",
                                                                                                    "Options": ["A) f'(x) = 3x^2 - 8x + 5, f''(x) = 6x - 8", "B) f'(x) = 3x^2 - 8x + 5, f''(x) = 6x", "C) f'(x) = 3x^2 - 4x + 5, f''(x) = 6x - 4", "D) f'(x) = 3x^2 - 4x + 5, f''(x) = 6x"],
                                                                                                    "Answer": 0,
                                                                                                    "Explanation": "Differentiate f(x) twice to find f'(x) and f''(x). The correct answer is A."
                                                                                                },
                                                                                                {
                                                                                                    "Difficulty": 3,
                                                                                                    "Question": "A radioactive substance has a half-life of 30 days. If there are 64 grams initially, how many grams will remain after 90 days?",
                                                                                                    "Options": ["A) 4 grams", "B) 8 grams", "C) 16 grams", "D) 32 grams"],
                                                                                                    "Answer": 0,
                                                                                                    "Explanation": "Use the formula for exponential decay to find the remaining grams. The answer is 4 grams."
                                                                                                }
                                                                                            ]

                                                                                            

let questionNumber = 0
startQuiz()

function startQuiz() {
    qHandler(0)
}


//--------------------------------------------------------------------------------------------------------


function qHandler(q) {
    question = data[q].Question;
    options = data[q].Options;
    answer = data[q].Answer;
    explanation = data[q].Explanation;
    difficulty = data[q].Difficulty;
    formatHTML(question, options, answer, explanation)
}

function formatHTML(question, options, answer, explanation) {
    const contentbox = document.querySelector('.content')
    let temp = options[answer]
    for (let i = options.length - 1; i > 0; i--) {
        const randomIndex = Math.floor(Math.random() * (i + 1));
        [options[i], options[randomIndex]] = [options[randomIndex], options[i]];
    }
    answer = options.indexOf(temp)

    contentbox.innerHTML = ''

    const html = `
    <div class="C1">
        <div>
            <label>${question}</label>
        </div>
        <div>
            <button class='btns' id='${options[0]}'>${options[0]}</button>
            <button class='btns' id='${options[1]}'>${options[1]}</button>
            <button class='btns' id='${options[2]}'>${options[2]}</button>
            <button class='btns' id='${options[3]}'>${options[3]}</button>
        </div>
    </div>
    `

    contentbox.innerHTML = html

    const btns = document.querySelectorAll('.btns')
    btns.forEach(btn => {
        btn.addEventListener('click', () => {
            verify(btn.id)
        });
    })

    function verify(ans) {

        if(options.indexOf(ans) == answer){
            console.log('Correct')
            popup(1)
            setTimeout(() => {
            qHandler(++questionNumber)
            }, 2000);
        }
        else {
            console.log('Wrong')
            popup(0)
            setTimeout(() => {
            qHandler(++questionNumber)
                }, 500);
        }
    }

}

function popup(v) {
    const popup = document.querySelector('.popup')
    const popuppar = document.querySelector('.popupparent')
    if(v==0){
        popuppar.style.display = 'flex'
        popup.style.backgroundImage = "url('../assets/exclaim.svg')"
        setTimeout(() => {
            popuppar.style.display = 'none'
                }, 500);
    }
    else if(v==1){
        popuppar.style.display = 'flex'
        popup.style.backgroundImage = "url('../assets/tickk.svg')"
        setTimeout(() => {
            popuppar.style.display = 'none'
                }, 500);
    }
}





//--------------------------------------------------------------------------------------------------------


