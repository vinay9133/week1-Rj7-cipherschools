class ListNode {
    val;
    next;
     constructor(val, next =null) {
        this.val =val;
        this.next =next;
    }

}
class TestClass {
 head;
constructor(head = null){
    this.head =head;
   }
   haslast(){
    return this.head !== null;
   }
   getlast(){
    if (!this.haslast()){
        return null;
    }
    let Current = this.head;
        while(Current.next !== null ){
            Current = Current.next;
        }
        let finalvalue =Current.val;
         Current = this.head;
         while(Current.next.next !== null){

         }
         Current.next.next=null;
         return finalvalue;

   }
}

let myvariable = new TestClass(
new ListNode(
    1,
    new ListNode(2, new ListNode))
);
console.log(myvariable.getlast());