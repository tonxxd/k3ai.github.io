"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[619],{1884:function(l,t,e){e.r(t),e.d(t,{frontMatter:function(){return o},contentTitle:function(){return s},metadata:function(){return r},toc:function(){return k},Highlight:function(){return d},default:function(){return c}});var n=e(7462),i=e(3366),u=(e(7294),e(3905)),a=["components"],o={id:"k3ai",title:"Command Reference"},s=void 0,r={unversionedId:"command-reference/k3ai",id:"command-reference/k3ai",isDocsHomePage:!1,title:"Command Reference",description:"<span",source:"@site/docs/command-reference/k3ai.mdx",sourceDirName:"command-reference",slug:"/command-reference/k3ai",permalink:"/docs/command-reference/k3ai",editUrl:"https://github.com/k3ai/k3ai/docs/command-reference/k3ai.mdx",tags:[],version:"current",frontMatter:{id:"k3ai",title:"Command Reference"},sidebar:"tutorialSidebar",previous:{title:"Quick Start",permalink:"/docs/intro"},next:{title:"Kubeflow Tutorial",permalink:"/docs/tutorials/kubeflow"}},k=[],d=function(l){var t=l.children;l.color;return(0,u.kt)("span",{style:{backgroundColor:"36473D",borderRadius:"2px",color:"#36473D",padding:"0.2rem"}},t)},m={toc:k,Highlight:d};function c(l){var t=l.components,e=(0,i.Z)(l,a);return(0,u.kt)("wrapper",(0,n.Z)({},m,e,{components:t,mdxType:"MDXLayout"}),(0,u.kt)("details",null,(0,u.kt)("summary",null,(0,u.kt)(d,{mdxType:"Highlight"},(0,u.kt)("b",null,(0,u.kt)("h2",null,"K3AI")),(0,u.kt)("div",null,"K3ai follow a super simple logic: ",(0,u.kt)("b",null,"K3AI [COMMAND] [ACTION] [OPTIONS]"),".Click on the arrow to discover its options."))),(0,u.kt)("div",null,(0,u.kt)("details",null,(0,u.kt)("summary",null,(0,u.kt)("h3",null,"up"),(0,u.kt)("div",null,(0,u.kt)("b",null,"Up")," is an ",(0,u.kt)("b",null,"[COMMAND]"),". It is used to configure ",(0,u.kt)("b",null,"OR")," update K3ai. Click on the arrow to discover its options.")),(0,u.kt)("div",null,(0,u.kt)("details",null,(0,u.kt)("summary",null,"--quiet [-q]"),(0,u.kt)("div",null,(0,u.kt)("b",null,"Quiet")," command is what you use to operate k3ai without our fancy loaders and messages.It's ideal for scripting.")))),(0,u.kt)("details",null,(0,u.kt)("summary",null,(0,u.kt)("h2",null,"down"),(0,u.kt)("div",null,(0,u.kt)("b",null,"Down")," is an ",(0,u.kt)("b",null,"[COMMAND]"),". It is used to remove completly K3ai from the local computer. Click on the arrow to discover its options.")),(0,u.kt)("div",null,(0,u.kt)("details",null,(0,u.kt)("summary",null,"--quiet [-q]"),(0,u.kt)("div",null,(0,u.kt)("b",null,"Quiet")," command is what you use to operate k3ai without our fancy loaders and messages.It's ideal for scripting.")))),(0,u.kt)("details",null,(0,u.kt)("summary",null,(0,u.kt)("h2",null,"cluster"),(0,u.kt)("div",null,(0,u.kt)("b",null,"Cluster")," is an ",(0,u.kt)("b",null,"[COMMAND]"),". It is used to call the action relative to the infrastructure. Click on the arrow to discover its options.")),(0,u.kt)("div",null,(0,u.kt)("details",null,(0,u.kt)("summary",null,(0,u.kt)("h3",null,"--deploy [-d]")),(0,u.kt)("div",null,(0,u.kt)("b",null,"Deploy")," is an ",(0,u.kt)("b",null,"[ACTION]"),". It is what you use to operate k3ai clusters.It allow you to deploy a cluster of a certain type and with a logic name.",(0,u.kt)("div",null,(0,u.kt)("details",null,(0,u.kt)("summary",null,(0,u.kt)("h4",null,"--type [-t] [TYPE OF CLUSTER]")),(0,u.kt)("div",null,(0,u.kt)("b",null,"Type")," is a first level ",(0,u.kt)("b",null,"[OPTION]"),". It is the type of cluster you want to deploy (i.e.: k3s)",(0,u.kt)("div",null,(0,u.kt)("details",null,(0,u.kt)("summary",null,"--name [-n] [LOGIC NAME OF CLUSTER]"),(0,u.kt)("div",null,(0,u.kt)("b",null,"Name")," is a second level ",(0,u.kt)("b",null,"[OPTION]"),". It is used to provide cluster  logic name for later operations. Not all cluster type allow to name instances.")))))),(0,u.kt)("details",null,(0,u.kt)("summary",null,"--quiet [-q]"),(0,u.kt)("div",null,(0,u.kt)("b",null,"Quiet")," command is what you use to operate k3ai without our fancy loaders and messages.It's ideal for scripting."))))),(0,u.kt)("div",null,(0,u.kt)("details",null,(0,u.kt)("summary",null,(0,u.kt)("h3",null,"--list [-l]")),(0,u.kt)("div",null,(0,u.kt)("b",null,"List")," is an [ACTION]. It is user to either list the available cluster types ",(0,u.kt)("b",null,"OR")," list the deployed clusters.",(0,u.kt)("div",null,(0,u.kt)("details",null,(0,u.kt)("summary",null,"--all [-a]"),(0,u.kt)("div",null,(0,u.kt)("b",null,"All")," is a first level ",(0,u.kt)("b",null,"[OPTION]"),". It is used to list all available cluster type deployable through k3ai."))),(0,u.kt)("div",null,(0,u.kt)("details",null,(0,u.kt)("summary",null,"--deployed [-d]"),(0,u.kt)("div",null,(0,u.kt)("b",null,"Deployed")," is a first level ",(0,u.kt)("b",null,"[OPTION]"),". It is used to list all deployed cluster through k3ai.")))))),(0,u.kt)("div",null,(0,u.kt)("details",null,(0,u.kt)("summary",null,"remove"),(0,u.kt)("div",null,(0,u.kt)("b",null,"Remove")," is an ",(0,u.kt)("b",null,"[ACTION]"),". It is used to remove a specific cluster, identified by the logical name.",(0,u.kt)("div",null,(0,u.kt)("details",null,(0,u.kt)("summary",null,"--name [-n]"),(0,u.kt)("div",null,(0,u.kt)("b",null,"Name")," is a first level ",(0,u.kt)("b",null,"[OPTION]"),". It is used to target the cluster that need to be removed, through its logical name."))),(0,u.kt)("div",null,(0,u.kt)("details",null,(0,u.kt)("summary",null,"--quiet [-q]"),(0,u.kt)("div",null,(0,u.kt)("b",null,"Quiet")," command is what you use to operate k3ai without our fancy loaders and messages.It's ideal for scripting."))))))),(0,u.kt)("details",null,(0,u.kt)("summary",null,(0,u.kt)("h2",null,"plugin"),(0,u.kt)("div",null,(0,u.kt)("b",null,"Plugin")," is an ",(0,u.kt)("b",null,"[COMMAND]"),". It is used to call the actions relative to the AI tools. Click on the arrow to discover its options.")),(0,u.kt)("div",null,(0,u.kt)("details",null,(0,u.kt)("summary",null,(0,u.kt)("h3",null,"--deploy [-d]")),(0,u.kt)("div",null,(0,u.kt)("b",null,"Deploy")," is an ",(0,u.kt)("b",null,"[ACTION]"),". It is what you use to operate k3ai clusters.It allow you to deploy a cluster of a certain type and with a logic name.",(0,u.kt)("div",null,(0,u.kt)("details",null,(0,u.kt)("summary",null,(0,u.kt)("h4",null,"--name [-n] [NAME OF PLUGIN]")),(0,u.kt)("div",null,(0,u.kt)("b",null,"Name")," is a first level ",(0,u.kt)("b",null,"[OPTION]"),". It is the name of the plugin you want to deploy (i.e.: mlflow)",(0,u.kt)("div",null,(0,u.kt)("details",null,(0,u.kt)("summary",null,"--target [-t] [LOGIC NAME OF CLUSTER]"),(0,u.kt)("div",null,(0,u.kt)("b",null,"Target")," is a second level ",(0,u.kt)("b",null,"[OPTION]"),". It is used to provide cluster  logic name where to install the plugin.")))))),(0,u.kt)("details",null,(0,u.kt)("summary",null,"--quiet [-q]"),(0,u.kt)("div",null,(0,u.kt)("b",null,"Quiet")," command is what you use to operate k3ai without our fancy loaders and messages.It's ideal for scripting.")))))))))}c.isMDXComponent=!0}}]);