<template>
	<div style="z-index:9999; overflow:hidden;" v-if="status">
		<!-- 蒙版 -->
		<div v-if="mask" class="position-fixed top-0 left-0 right-0 bottom-0"
			:style="getMaskColor" @click="hide">
		</div>
		<!-- 弹出框 -->
		<div class="position-fixed bg-white" :class="getBodyClass" :style="getBodyStyle">
			<!-- <view style="height:300rpx; width:200rpx;">弹出菜单</view> -->
			<slot></slot>
		</div>
	</div>
</template>

<script>
	export default {
		props: {
			// 是否开启蒙版颜色
			maskColor: {
				type: Boolean,
				default: false
			},
			// 是否开启蒙版
			mask: {
				type: Boolean,
				default: false
			},
			// 是否处于底部
			fixedBottom: {
				type: Boolean,
				default: false
			}
		},
		data () {
			return {
				status: false,
				x: -1,
				y: -1
			}
		},
		methods: {
			show (x, y) {
				this.x = x;
				this.y = y;
				this.status = true;
			},
			hide () {
				this.status = false
			}
		},
		computed: {
			// 开启蒙版

			// 蒙版颜色（透色和纯透明）
			getMaskColor () {
				let i = this.maskColor ? 0.5 : 0
				return `background-color: rgba(0, 0, 0, ${i});`
			},
			getBodyClass () {
				let fixedBottom = this.fixedBottom ? 'left-0 right-0 bottom-0' : 'rounded border left-100 top-100'
				return fixedBottom
			},
			getBodyStyle () {
				let left = this.x > -1 ? `left:${this.x}px;` : ''
				let top = this.y > -1 ? `top:${this.y}px;` : ''
				// return `${left} ${top}`
				return left + top
			}
		}
	}
</script>

<style>
</style>
