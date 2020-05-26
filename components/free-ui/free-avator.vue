<template>
	<view class="flex align-center justify-center" style="width:145rpx;">
		<image :src="src" mode="widthFix" :class="type" :style="getStyle"></image>
	</view>
</template>

<script>
	export default {
		props: {
			size: {
				type: [String, Number],
				default: 90
			},
			src: {
				type: String,
				default: ''
			},
			type: {
				type: String,
				default: 'rounded'
			}
		},
		computed: {
			getStyle () {
				return `width: ${this.size}rpx; height: ${this.size}rpx`
			}
		}
	}
</script>

<style>
</style>
