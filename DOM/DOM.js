/* 
    DOM : Document Object Model 
    BOM : Browser Object Model 
    - BOM > DOM

    DOM > Node
    ex)
                document 
               /        \
             head       body            Node == head, meta, title, link.... 
           /  |  \         |                    everything that is created under `document`
       meta title link    header
                            |   \
                           nav  main ... 
                            |
                            ul
                            |
                        li li li li      

Browser == Object
DOM == Object as well

Shadow DOM:
- lets us create custom components (aka Web Components) 
  or in other words create scoped DOM trees inside our elements. 

  Ex) <video> </video>
        - video HTML tag does not have any buttons element that shows inside the video. 
        - buttons from video tag is not showing because of `Shadow DOM`
        - any css will not be working to components inside the `Shadow DOM`. 

Virtual DOM:
- Abstraction on top of the actual DOM where an ideal or'virtual' representation of a UI is
  kept in memory and synced with the 'real' DOM. 

*/
