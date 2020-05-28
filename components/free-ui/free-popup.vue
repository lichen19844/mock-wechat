<template>
	<div style="z-index:9999; overflow:hidden;" v-if="status">
		<!-- 蒙版 -->
		<div class="position-fixed top-0 left-0 right-0 bottom-0"
			style="background-color: rgba(0, 0, 0, 0.5);" @click="hide">
			<!-- 弹出框 -->
			<div class="position-fixed bg-white" style="left:100rpx; top:100rpx;">
				<!-- <view style="height:300rpx; width:200rpx;">弹出菜单</view> -->
				<slot></slot>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data () {
			return {
				status: false
			}
		},
		methods: {
			show () {
				this.status = true
			},
			hide () {
				this.status = false
			}
		}
	}
</script>

<style>
</style>
