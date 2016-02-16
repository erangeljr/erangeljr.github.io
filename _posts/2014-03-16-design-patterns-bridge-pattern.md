---
layout: post
title:  "Design Patterns: Bridge Pattern"
date:   2014-03-16 17:48:57
comments: true
categories: softwareengineering computerscience designpatterns bridgepattern
---

I have been learning about different <a href="http://en.wikipedia.org/wiki/Design_Patterns">Design Patterns</a>. I purchased the book <a href="http://www.amazon.com/Design-Patterns-Elements-Reusable-Object-Oriented/dp/0201633612/">Design Patterns</a> by the Gang of Four and have been going through trying to implement them using C#.

I am going to start off with the <a href="http://en.wikipedia.org/wiki/Bridge_pattern">Bridge Pattern</a>.

The Bridge Patterns is used to decouple an abstraction from its implementation. This will allow them to vary independently.

Let's say you have several types of related objects that you need to print.

{% highlight csharp %}
void Main()
{

	var pharmacyReferral = new Pharmacy(standard);
    pharmacyReferral.PharmacyReferralId = 9;
    pharmacyReferral.Member = "Clarence Worley";
    pharmacyReferral.NationalDrugCode.Add("313", "Medicine");
    pharmacyReferral.Print();
}

public class Pharmacy{

	public int PharmacyReferralId { get; set; }
    public string Member { get; set; }
    public Dictionary<string, string> NationalDrugCode { get; set; }

	public void Print()
    {
            Console.WriteLine("Pharmacy Number", PharmacyReferralId.ToString()));
            Console.WriteLine("Member", Member));
            foreach (var drug in NationalDrugCode)
            {
                Console.WriteLine("Code", drug.Key));
                Console.WriteLine("Name", drug.Value));
            }
            Console.WriteLine();
    }

}


{% endhighlight %}

This is what we would typically do. Create a Print method that handles the printing of each of the Pharmacy objects.

Output:

{% highlight csharp %}
Pharmacy Number: 9
Member: Clarence Worley
Code: 313
Name: Medicine
{% endhighlight %}

Let's say you had several object that needed the same type of functionality and they were similar enough that they could share an interface.

You could then create an interface that contained a print method that each object would implement.

{% highlight csharp %}
 public interface Referral
 {
 	public void print();
 }
{% endhighlight %}

Now each of the object you create can implement the interface. In this scenario the abstraction and implementation are tightly coupled. What if we needed somebthing a little more flexible? What if each of the object needed to be printed in a different way? You could let your objects implement there own Print methods or you can add another layer of abstraction.

This is where you can use the Bridge Pattern to decouple the abstration from the implementation.

{% highlight csharp %}
class BridgeMain
{
    static void Main(string[] args)
    {
        List<Referral> authorizations = new List<Referral>();

        var standard = new StandardFormatter();
        var executive = new ExecutiveFormatter();
        var fancy = new FancyFormatter();

        var pharmacyReferral = new Pharmacy(standard);
        pharmacyReferral.PharmacyReferralId = 9;
        pharmacyReferral.Member = "Clarence Worley";
        pharmacyReferral.NationalDrugCode.Add("313", "Medicine");
        authorizations.Add(pharmacyReferral);

        var externalReferral = new External(executive);
        externalReferral.ExternalId = 7;
        externalReferral.Member = "Jim Morrison";
        externalReferral.Procedures.Add("757", "Evaluation");
        authorizations.Add(externalReferral);

        var internalReferral = new Internal(fancy)
        {
            Member = "Pedro De Pacas",
            InternalId = 9,
            Symptoms = "Flu"
        };

        authorizations.Add(internalReferral);

        foreach (var auth in authorizations)
        {
            auth.Print();
        }

        Console.ReadKey();
    }
}
{% endhighlight %}

Here I refactored the Referral Class from being an Interface to an Abstract Class and created an Abstract public method.
I then added an Interface I call an IFormatter to implement the variations needed for each type of Referral.

{% highlight csharp %}
public abstract class Referral
{

    protected readonly IFormatter formatter;

    public Referral(IFormatter formatter)
    {
        this.formatter = formatter;
    }

    abstract public void Print();
}

public interface IFormatter
{
    string Format(string key, string value);
}
{% endhighlight %}

Now, I can create a Class that implements the IFormatter interface.

{% highlight csharp %}
public class StandardFormatter : IFormatter
{
    public string Format(string key, string value)
    {
        return string.Format("{0}: {1}", key, value);
    }
}
{% endhighlight %}

Here is the refactored Pharmacy class

{% highlight csharp %}
public class Pharmacy : Referral
{
    public int PharmacyReferralId { get; set; }
    public string Member { get; set; }

    public Dictionary<string, string> NationalDrugCode { get; set; }


    public Pharmacy(IFormatter formatter)
        : base(formatter)
    {

        NationalDrugCode = new Dictionary<string, string>();

    }

    public override void Print()
    {
        Console.WriteLine(formatter.Format("Pharmacy Number", PharmacyReferralId.ToString()));
        Console.WriteLine(formatter.Format("Member", Member));
        foreach (var drug in NationalDrugCode)
        {
            Console.WriteLine(formatter.Format("Code", drug.Key));
            Console.WriteLine(formatter.Format("Name", drug.Value));
        }
        Console.WriteLine();
    }

}
{% endhighlight %}

We can then create custom Formatters to handle different formats for printing out our objects.

Here's the output for the different formatters I used for each of the objects that inherit the Abstract Class which implemnt the Interface.

{% highlight csharp %}
Pharmacy Number: 9
Member: Clarence Worley
Code: 313
Name: Medicine

<italics> External Number </italics>     7
<italics> Member </italics>      Jim Morrison
<italics> Code </italics>        757
<italics> Name </italics>        Evaluation

<bold> Internal Number </bold>           9
<bold> Member </bold>            Pedro De Pacas
<bold> Symptoms </bold>          Flu
{% endhighlight %}

I used the HTML tags for demonstration purposes only. I wanted a way to convey that you could apply style or whatever you wanted. Since this is just a Console Application demo, I'm kind of limited on what I can display. Either way. Hope you enjoyed my working example. Don't forget to check out the whole project on <a href="https://github.com/erangeljr/DesignPatterns/tree/master/BridgePattern">Github.</a>
