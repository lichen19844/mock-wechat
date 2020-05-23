<template>
	<view>
		<view class="bg-light" :class="fixed ? 'fixed-top' : '' ">
			<!-- 状态栏 -->
			<view :style="statusBHeight"></view>
			<!-- 导航 -->
			<view class="w-100 flex align-center justify-between" style="height:90rpx">
				<!-- 左边 -->
				<view class="flex align-center">
					<!-- 标题 -->
					<text v-if="title" class="font-md ml-3"><slot name="title"></slot></text>
				</view>
				<!-- 右边 -->
				<view class="flex align-center">
					<view class="flex align-center justify-center" hover-class="bg-hover-light" style="height: 90rpx; width:90rpx;" @click="$emit('click')">
						<text class="iconfont font-md">&#xe6e3;</text>
					</view>
					<view class="flex align-center justify-center" hover-class="bg-hover-light" style="height: 90rpx; width:90rpx;" @click="$emit('click')">
						<text class="iconfont font-md">&#xe682;</text>
					</view>
					<free-icon-button @click="xxx">&#xe6e3;</free-icon-button>
					<!-- <free-icon-button>&#xe682;</free-icon-button> -->
				</view>
			</view>
		</view>
		<!-- 占位 -->
		<!-- <view :style="'height:' + this.navBarHeight + 'px'"></view> -->
		<view v-if="fixed" :style="fixedStyle"></view>
	</view>
</template>

<script>
import freeIconButton from './free-icon-button.vue';
export default {
	props: {
		title: {
			type: Boolean,
			default: false
		},
		fixed: {
			type: Boolean,
			default: true
		}
	},
	components: {
		freeIconButton
	},
	data() {
		return {
			statusBarHeight: 0,
			navBarHeight: 0
		};
	},
	mounted() {
		// #ifdef APP-PLUS-NVUE
		this.statusBarHeight = plus.navigator.getStatusbarHeight();
		console.log('statusBarHeight', this.statusBarHeight);
		this.navBarHeight = this.statusBarHeight + uni.upx2px(90);
		// #endif
	},
	methods: {},
	computed: {
		statusBHeight() {
			return `height: ${this.statusBarHeight}px`;
		},
		fixedStyle() {
			return `height: ${this.navBarHeight}px`;
		}
	}
};
</script>

<style></style>
