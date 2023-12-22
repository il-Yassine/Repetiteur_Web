


<template>
    <div >
      
        <div class="card">
            <div class="card-header">
                <h4>
                    Student 
                    <RouterLink to="/student/create" class="btn btn-primary float-end">
                        Add Student 
                    </RouterLink>
                </h4>
            </div>
            <div class="card-body">
                <table class="table table-bordered">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Course</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody v-if="this.students.length >0">
                        <tr v-for="(student, index) in this.students" :key="index">
                        <td>{{ student.id }}</td>
                        <td>{{ student.name }}</td>
                        <td>{{ student.course }}</td>
                        <td>{{ student.email }}</td>
                        <td>{{ student.phone }}</td>
                        
                        <td>
                        <RouterLink :to="{ path:'/student/'+student.id+'/edit'}" class="btn btn-success float-end">
                        Edit 
                    </RouterLink>
                    
                      <button type="button" class="btn btn-danger"> Delete</button>
                    
                        
                        </td>
                        </tr>
                    </tbody >
                    <tbody v-else>
                      <tr>
                      <td colspan="6">
                      Loading...
                      </td></tr>  
                    </tbody>
                    

                </table>

            </div>

        </div>
    </div>
  </template>

  <script>
  import axios from 'axios'
  export default {
    name:'students',
    data(){
        return{
            students:[]
        }
    },
    mounted(){
      //  console.log('I am here')
      this.getStudent();
    },
    methods :{
        getStudent(){
            axios.get('http://127.0.0.1:8000/api/v1/students').then(res=>{
                this.students=res.data.data
                console.log(this.students)
                console.log(res)
            });
        }
    }
  }

</script> 