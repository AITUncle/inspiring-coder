/**
 * Created by vectorzeng on 17/8/23.
 */

import React, {Component} from "react";
import Typography from "material-ui/Typography";
import {randomGetArrayItem} from "../util/Util";

class CoderTips extends Component{
    constructor(props){
        super(props);
        this.tipsArray = [
            'Talk is cheap, Show me the code.废话少说，放码过来.',    //1
            'Tab or space ,that is a question.',//2
            '有话好好说，别动代码.',//3
            '要砍砍我，别砍需求.',//4
            'php是世界上最好的语言.',//5
            'you can you up, no can no BB.',//6
            '宁为代码类弯腰，不为bug点提交.',//7
            '面向对象面向君，不负代码不负卿.',//8
            '嫁人就嫁程序猴,钱多话少活还好.',//9
            '不要问我如果...的问题,我从不写不执行的if条件.',//10
            '莫说运维知音少,谁道研发不风情.',//11
            '世上本没有框架，码的人多了便成了框架.',//12
            '架构是对客观不足的妥协,规范是对主观不足的妥协.',//13
            '"帮我修下电脑？"，"我是搞软件的啊."; "重装系统？", "我是写代码的啊啊."',//14
        ];
        this.randomTips = randomGetArrayItem(this.tipsArray);

    }

    render(){
        let {tips, children, ...other} = this.props;
        if(!tips){
            tips = this.randomTips;
        }
        return (
            <Typography gutterBottom align="center" {...other} color="accent">
                {tips}{children}
            </Typography>
        );
    }
}

export default CoderTips;