Vue.component('blog-post', {
    props: ['todo'],
    template: 
        `<ul class="item_header">
            <div v-if='todo.dayline===true' class="dayline" >
                <div class="line1"></div>
                <span class="line_text">Yesterday</span>
            </div>
            <li>
                <img v-bind:src="todo.H_picture" class="itype">
                <span class="username">{{todo.username}}</span>
                <span class="action">{{todo.action_a}}</span>
                <span class="theme">{{todo.theme}}</span>
                <span class="mainpoint">{{todo.mainpoint}}</span>
                <span class="emailfrom">{{todo.emailfrom}}</span>
                <span class="time">{{todo.time}}</span>
                <div class="m_body">
                    {{todo.m_body}}
                    <img v-bind:src="todo.body_picture" class="body_picture">
                </div><br>
                <img v-bind:src="todo.r_picture" class="E_picture">
            </li>
            <div  v-if='todo.cutline===true' class="line0">
            </div>
        </ul>`
    })
new Vue({
    el: '#blog-post-demo',
    data: {
        todos:[
      { H_picture:'image/1.png',
        username:'Chirs,Peng',
        action_a:'add',
        theme:'Note',
        mainpoint:'1/29/2018 Sprint Summary',
        m_body:'Developers make sure that finish all new feature development and critical issue fixing and merge all code to master branch at this...',
        time:'07:31PM',
        r_picture:"image/7.png",
        cutline:true,
      },
      { H_picture:'image/2.png',
        username:'Chirs,Peng',
        action_a:'updated',
        theme:'Meeting',
        mainpoint:'KKKKK',
        m_body:'status on 2018/03/09 11:00 AM and assign to Outlook Ying,ting ma',
        time:'07:31PM',
        r_picture:"image/7.png",
        cutline:true
      },
      { H_picture:'image/3.png',
        username:'Chirs,Peng',
        action_a:'sent',
        theme:'Document',
        mainpoint:'KKKKK.jpg',
        body_picture: 'image/6.png',
        time:'07:31PM',
        r_picture:'image/7.png',
      },
      { H_picture:'image/4.png',
        username: 'Chirs,Peng',
        action_a: 'received an email to:',
        emailfrom: 'allen@yhlsoft.com',
        m_body: 'Re:Now US Release plan-staging need support people to help testing Added new showstopper issuses for staging,the big issue is that mang...',
        time: '07:31 PM',
        r_picture:'image/8.png',
        dayline:true,
        cutline:true
      }, 
      { H_picture:'image/4.png',
        username: 'Chirs,Peng',
        action_a: 'received an email to:',
        emailfrom: 'allen@yhlsoft.com',
        m_body: 'Now US Release plan-staging need support people to help testing Added new showstopper issuses for staging,the big issue is that mang...',
        time: '07:31 PM',
        cutline:true
      }, 
      { H_picture:'image/4.png',
        username: 'Chirs,Peng',
        action_a: 'received an email to:',
        emailfrom: 'allen@yhlsoft.com',
        m_body: 'Now US Release plan-staging need support people to help testing Added new showstopper issuses for staging,the big issue is that mang...',
        time: '07:31 PM',
        cutline:true
      },
      { H_picture:'image/4.png',
        username: 'Chirs,Peng',
        action_a: 'received an email to:',
        emailfrom: 'allen@yhlsoft.com',
        m_body: 'Now US Release plan-staging need support people to help testing Added new showstopper issuses for staging,the big issue is that mang...',
        time: '07:31 PM'
      }]
    }
})