class ListNode {    
    constructor (data, next = null) {
        this.data = data;
        this.next = next;
    } 
}
// const n1 = new ListNode(100);
// console.log(n1);


class LinkedList {
    constructor() {
       this.head = null;
       this.size = 0;
    }
    
    // Insert first node
    insertFirst(data) {
        this.head = new ListNode(data, this.head); 
        this.size++;
    }

    // Insert last node 
    insertLast(data){
        let node = new ListNode(data);
        let current;

        // if empty, make head
        if(!this.head){
          this.head = node;
        } else {
           current = this.head;
           
           while(current.next){
              current = current.next;
           }
           current.next = node;

        }
        this.size++;
    }

    // Insert at index
    insertAt(data, index){
        // If index is out of range
       if(index > 0 && index > this.size){
        return;
       }
      
       // if first index 
       if(index === 0){
        this.head = new ListNode(data, this.head);
        return;
       }

       const node = new ListNode(data);
       let current, previous;

       // Set current to first
       current = this.head;
       let count = 0;

       while(count < index){
          previous = current; // Node before the index
          count++;
          current = current.next; // Node after the index

       }

       node.next = current;
       previous.next = node;


       this.size++;

    }

    // Get at index
    getAt(index){
        let current = this.head;
        let count = 0;

        while(current){
            if(count == index){
                console.log(current.data);
            }
            count++;
            current = current.next;
        }

        return null;
    }

   // Remove at index
   removeAt(index){
      if(index > 0 && index > this.size){
        return;
      }

      let current = this.head;
      let previous;
      let count = 0;

      //remove first
      if(index === 0){
        this.head = current.next;
      }else{
        while(count < index){
            count++;
            previous = current;
            current = current.next;
        }

        previous.next = current.next;
      }
      this.size--;
   }

    // clear list
    clearlist(){
        this.head = null;
        this.size = 0;
    }



     

   // Print list data
   printListData(){
      let current = this.head;

      while(current){
        console.log(current.data);
        current = current.next;
      }
   }
}

const ll = new LinkedList();
   ll.insertFirst(100);
   ll.insertFirst(200);
   ll.insertFirst(300);
   ll.insertLast(400);
   ll.insertAt(500, 2);
   
   ll.removeAt(0);


ll.printListData();
//ll.getAt(0);