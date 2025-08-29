
### 6. Answer to the questions :

<ins>Questions 1:</ins>
What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll**?
<ins>Answer:</ins>
getElementById: Targets a single element using its unique id attribute.
getElementsByClassName: Targets all elements with a specific class attribute.
querySelector: Targets the first element that matches any valid CSS selector.
querySelectorAll: Targets all elements that match any valid CSS selector.

---

<ins>Questions 2:</ins>
How do you **create and insert a new element into the DOM**?
<ins>Answer:</ins>
Create a new element: const div = document.createElement('div');
Insert a new element into the DOM: const parent = document.getElementById('container')
parent.appendChild(newDiv);

---

<ins>Questions 3:</ins>
What is **Event Bubbling** and how does it work?
<ins>Answer:</ins>
1. Capturing Phase: The event starts at the top of the DOM and travels down to the element that was directly interacted with (the "target").
2. Target Phase: The event reaches and is handled by the target element.
3. Bubbling Phase: The event then propagates from the target element back up to the root of the document, triggering any matching event handlers on its ancestors.

---

<ins>Questions 4:</ins>
What is **Event Delegation** in JavaScript? Why is it useful?
<ins>Answer:</ins>
Event delegation is a design pattern in JavaScript for handling events from multiple child elements with a single event listener attached to a common parent or ancestor. 
Why event delegation is useful: Improves performance, Simplifies dynamic elements, Reduces code complexity etc.

---

<ins>Questions 5:</ins>
What is the difference between **preventDefault() and stopPropagation()** methods?
<ins>Answer:</ins>
preventDefault(): Prevents the default action the browser would take for an event.
stopPropagation(): Prevents the event from continuing its propagation (bubbling) up the DOM tree.

