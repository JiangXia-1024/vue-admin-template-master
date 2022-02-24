import request from '@/utils/request'

export default{
    // 1、教师列表 条件分页查询
    getTeacherListPage(current,limit,teacherQuery){
        return request({
            // url:'/eduservice/teacher/pageTeacherCondition/'+current+"/"+limit,
            url:`/eduservice/teacher/pageTeacherCondition/${current}/${limit}`,
            method:'post',
            // teacherQuery条件对象，后台使用requestbody获取数据
            //data表示将对象转换成jason，传递到接口中
            data:teacherQuery
            // params:{
            // }
        })
    },
     //删除教师
     deleteTeacherId(id) {
        return request({
            url: `/eduservice/teacher/${id}`,
            method: 'delete'
          })
    },
    //添加教师
    addTeacher(teacher) {
        return request({
            url: `/eduservice/teacher/addTeacher`,
            method: 'post',
            data: teacher
          })
    },
    //根据id查询教师
    getTeacherInfo(id) {
        return request({
            url: `/eduservice/teacher/getTeacher/${id}`,
            method: 'get'
          })
    },
    //修改教师
    updateTeacherInfo(teacher) {
        return request({
            url: `/eduservice/teacher/updateTeacher`,
            method: 'post',
            data: teacher
          })
    }
}