import { sidebar } from "vuepress-theme-hope";

export const enSidebar = sidebar({
  "": [
    {
      text: "首页",
      icon: "about",
      link: "/"
    },
    {
      text: "算法",
      icon: "discover",
      collapsable:true,
      children: [
        {
          text: "代码随想录",
          icon: "note",
          link: "/algorithm/代码随想录/代码随想录目录.md"
        },
        {
          text: "labuladong",
          icon: "note",
          link: "/algorithm/labuladong/labuladong目录.md"
        }
      ]
    },
    {
      text: "Redis",
      icon: "creative",
      collapsable:true,
      children: [
        {
          text: "Redis核心技术与实战",
          icon: "note",
          link: "/Redis/极客/Redis核心技术与实战/Redis核心技术目录.md"
        },
        {
          text: "水滴与银弹",
          icon: "note",
          link: "/Redis/水滴与银弹/水滴与银弹目录.md"
        },
        {
          text: "读书笔记",
          icon: "note",
          link: "/"
        }
      ]
    },
    {
      text: "Kafka",
      icon: "note",
      collapsable:true,
      children: [
        {
          text: "kafka权威指南",
          icon: "note",
          link: "/kafka/读书笔记/《kafka权威指南》/kafka权威指南目录.md"
        },
        {
          text: "深入理解kafka核心设计与实现",
          icon: "note",
          link: "/kafka/读书笔记/《深入理解Kafka核心设计与实践原理》/深入理解kafka目录.md"
        },
        {
          text: "面试",
          icon: "note",
          link: "/kafka/面试.md"
        }
      ]
    },
    {
      text: "MySQL",
      icon: "article",
      collapsable:true,
      children: [
        {
          text: "MySQL实战45讲",
          icon: "note",
          link: "/MySQL/MySQL实战45讲/MySQL实战45讲目录.md"
        }
      ]
    },
    {
      text: "RPC",
      icon: "book",
      collapsable:true,
      children: [
        {
          text: "RPC实战与核心原理",
          icon: "note",
          link: "/RPC/极客/《RPC实战与核心原理》/RPC实战目录.md"
        }
      ]
    },
    {
      text: "微服务",
      icon: "book",
      collapsable:true,
      children: [
        {
          text: "从零开始学习微服务",
          icon: "note",
          link: "/微服务/微服务目录.md"
        }
      ]
    },
    {
      text: "设计模式",
      icon: "about",
      collapsable:true,
      children: [
        {
          text: "设计模式之美",
          icon: "note",
          link: "/DesignPattern/设计模式之美/设计模式目录.md"
        }
      ]
    },
    {
      text: "调优",
      icon: "star",
      collapsable:true,
      children: [
        {
          text: "MySQL调优",
          icon: "note",
          link: "/调优/MySQL调优/调优目录.md"
        }
      ]
    }
  ],
});
