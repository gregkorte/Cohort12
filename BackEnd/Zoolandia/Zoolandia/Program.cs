using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Zoolandia
{
    class Zoolandia
{
        static void Main(string[] args)
        {
            Reptile tickTock = new Reptile();
            tickTock.animalName = "Tick Tock";
            tickTock.averageWeight = 300;
            tickTock.food = "birds, fish, turtles, hands & clocks";
            tickTock.noise = "hiss";
            tickTock.solitary = true;
            tickTock.speciesName = "reptiliasClocksimus";

            Console.Write("I know a {4} named {0} who likes to {3} and eat enough {2} that he weighs {1}.", tickTock.animalName, tickTock.averageWeight, tickTock.food, tickTock.noise, tickTock.speciesName);
        }

        class Animal
        {
            public string animalName { get; set; }
        }

        class Species : Animal
        {
            public string speciesName { get; set; }
        }

        class Monkey : Species
        {
            public string noise { get; set; }
            public string food { get; set; }
            public bool solitary { get; set; }
            public int averageWeight { get; set; }
        }

        class Cat : Species
        {
            public string noise { get; set; }
            public string food { get; set; }
            public bool solitary { get; set; }
            public int averageWeight { get; set; }
        }

        class Bird : Species
        {
            public string noise { get; set; }
            public string food { get; set; }
            public bool solitary { get; set; }
            public int averageWeight { get; set; }
        }
        class Reptile : Species
        {
            public string noise { get; set; }
            public string food { get; set; }
            public bool solitary { get; set; }
            public int averageWeight { get; set; }
        }
    }
}