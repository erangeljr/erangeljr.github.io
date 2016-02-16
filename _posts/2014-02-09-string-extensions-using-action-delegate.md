---
layout: post
title:  "String Extensions using Action Delegate"
date:   2014-02-09 13:48:57
comments: true
categories: softwareengineering hacking csharp
---

I was introduced to an Action Delegate on Friday. An Action Delegate encapsulates a method that has no parameters and does not return a value. In this example it will encapsulate a method that has two parameters, a string and a string array. My example Extends the string data type to include a Log Method that writes the string to the Console. You could modify this to write to a Log File.

{% highlight csharp %}
void Main()
{

	"log this message".Log();

	var textToLog = "This is a log";

	textToLog.Log();

	"{0} This is a new string {1}".Log(new[] {"pre", "post"});
}

public static class StringExtensions{

	public static void Log(this string message, string[] paramList = null){
		Action<string, string[]> log = Console.WriteLine;
		log(message, paramList);
	}

}


{% endhighlight %}

This is what would be output to the Console.

{% highlight text %}

log this message
This is a log
pre This is a new string post

{% endhighlight %}
