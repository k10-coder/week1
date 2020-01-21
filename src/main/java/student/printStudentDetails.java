/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package student;

/**
 *
 * @author ketan
 */
public class printStudentDetails {
    public static void main(String[] args) {
        
        Student s1= new Student();//an object for student class
        s1.name="ketan";
        s1.sid=123;
        
        System.out.println(s1.name+" "+ s1.sid);
    }
}
