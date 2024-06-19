package application

import (
	"github.com/donknap/dpanel/app/application/http/controller"
	common "github.com/donknap/dpanel/common/middleware"
	"github.com/gin-gonic/gin"
	http_server "github.com/we7coreteam/w7-rangine-go/src/http/server"
)

type Provider struct {
}

func (provider *Provider) Register(httpServer *http_server.Server) {
	// 注册一些路由
	httpServer.RegisterRouters(
		func(engine *gin.Engine) {
			cors := engine.Group("/", common.CorsMiddleware{}.Process)

			// 站点相关
			cors.POST("/app/site/create-by-image", controller.Site{}.CreateByImage)
			cors.POST("/app/site/get-list", controller.Site{}.GetList)
			cors.POST("/app/site/get-detail", controller.Site{}.GetDetail)
			cors.POST("/app/site/delete", controller.Site{}.Delete)
			cors.POST("/app/site/create-domain", controller.SiteDomain{}.Create)
			cors.POST("/app/site/get-domain-list", controller.SiteDomain{}.GetList)
			cors.POST("/app/site/delete-domain", controller.SiteDomain{}.Delete)
			cors.POST("/app/site/get-domain-detail", controller.SiteDomain{}.GetDetail)
			cors.POST("/app/site/apply-domain-cert", controller.SiteDomain{}.ApplyDomainCert)

			// 容器相关
			cors.POST("/app/container/status", controller.Container{}.Status)
			cors.POST("/app/container/get-list", controller.Container{}.GetList)
			cors.POST("/app/container/get-detail", controller.Container{}.GetDetail)
			cors.POST("/app/container/update", controller.Container{}.Update)
			cors.POST("/app/container/prune", controller.Container{}.Prune)
			cors.POST("/app/container/delete", controller.Container{}.Delete)
			cors.POST("/app/container/export", controller.Container{}.Export)

			cors.POST("/app/container/get-stat-info", controller.Container{}.GetStatInfo)
			cors.POST("/app/container/get-process-info", controller.Container{}.GetProcessInfo)

			// 镜像相关
			cors.POST("/app/image/create-by-dockerfile", controller.Image{}.CreateByDockerfile)
			cors.POST("/app/image/get-list", controller.Image{}.GetList)
			cors.POST("/app/image/get-detail", controller.Image{}.GetDetail)
			cors.POST("/app/image/image-delete", controller.Image{}.ImageDelete)
			cors.POST("/app/image/image-prune", controller.Image{}.ImagePrune)
			cors.POST("/app/image/build-prune", controller.Image{}.BuildPrune)
			cors.POST("/app/image/export", controller.Image{}.Export)
			cors.POST("/app/image/import-by-container-tar", controller.Image{}.ImportByContainerTar)
			cors.POST("/app/image/import-by-image-tar", controller.Image{}.ImportByImageTar)

			cors.POST("/app/image/get-template-list", controller.Image{}.GetTemplateList)
			cors.POST("/app/image/get-template-dockerfile", controller.Image{}.GetTemplateDockerfile)

			cors.POST("/app/image/tag-remote", controller.Image{}.TagRemote)
			cors.POST("/app/image/tag-delete", controller.Image{}.TagDelete)
			cors.POST("/app/image/tag-add", controller.Image{}.TagAdd)
			cors.POST("/app/image/tag-sync", controller.Image{}.TagSync)

			cors.POST("/app/image/get-list-build", controller.Image{}.GetListBuild)
			cors.POST("/app/image/get-build-task", controller.Image{}.GetBuildTask)
			cors.POST("/app/image/delete-build-task", controller.Image{}.DeleteBuildTask)
			cors.POST("/app/image/update-title", controller.Image{}.UpdateTitle)

			// 文件相关
			engine.POST("/app/explorer/export", controller.Explorer{}.Export)
			engine.POST("/app/explorer/import", controller.Explorer{}.Import)
			engine.POST("/app/explorer/import-file-content", controller.Explorer{}.ImportFileContent)
			engine.POST("/app/explorer/unzip", controller.Explorer{}.Unzip)
			engine.POST("/app/explorer/get-path-list", controller.Explorer{}.GetPathList)
			engine.POST("/app/explorer/delete", controller.Explorer{}.Delete)
			engine.POST("/app/explorer/get-content", controller.Explorer{}.GetContent)
			engine.POST("/app/explorer/chmod", controller.Explorer{}.Chmod)

			// 日志相关
			cors.POST("/app/log/run", controller.RunLog{}.Run)

			// 网络相关
			cors.POST("/app/network/get-detail", controller.Network{}.GetDetail)
			cors.POST("/app/network/get-list", controller.Network{}.GetList)
			cors.POST("/app/network/prune", controller.Network{}.Prune)
			cors.POST("/app/network/create", controller.Network{}.Create)
			cors.POST("/app/network/delete", controller.Network{}.Delete)
			cors.POST("/app/network/disconnect", controller.Network{}.Disconnect)
			cors.POST("/app/network/connect", controller.Network{}.Connect)
			cors.POST("/app/network/get-container-list", controller.Network{}.GetContainerList)

			// 存储相关
			cors.POST("/app/volume/get-list", controller.Volume{}.GetList)
			cors.POST("/app/volume/get-detail", controller.Volume{}.GetDetail)
			cors.POST("/app/volume/prune", controller.Volume{}.Prune)
			cors.POST("/app/volume/create", controller.Volume{}.Create)
			cors.POST("/app/volume/delete", controller.Volume{}.Delete)

			// Compose 相关
			cors.POST("/app/compose/create", controller.Compose{}.Create)
			cors.POST("/app/compose/get-list", controller.Compose{}.GetList)
			cors.POST("/app/compose/get-detail", controller.Compose{}.GetDetail)
			cors.POST("/app/compose/delete", controller.Compose{}.Delete)

			cors.POST("/app/compose/container-deploy", controller.Compose{}.ContainerDeploy)
			cors.POST("/app/compose/container-destroy", controller.Compose{}.ContainerDestroy)
			cors.POST("/app/compose/container-ctrl", controller.Compose{}.ContainerCtrl)
			cors.POST("/app/compose/container-process-kill", controller.Compose{}.ContainerProcessKill)
		},
	)
}
