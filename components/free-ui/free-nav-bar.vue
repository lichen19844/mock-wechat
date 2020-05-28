<template>
	<view>
		<view class="bg-light" :class="fixed ? 'fixed-top' : '' ">
			<!-- 状态栏 -->
			<view :style="statusBHeight"></view>
			<!-- 导航 -->
			<view class="w-100 flex flex-row align-center justify-between" style="height:90rpx">
				<!-- 左边 -->
				<view class="flex align-center">
					<!-- 标题 -->
					<!-- <text v-if="title" class="font-md ml-3"><slot name="title"></slot></text> -->
					<text v-if="title" class="font-md ml-3">{{getTitle}}</text>
				</view>
				<!-- 右边 -->
				<view class="flex flex-row align-center">
					<view class="flex align-center justify-center" hover-class="bg-hover-light" style="height: 90rpx; width:90rpx;" @click="$emit('click')">
						<text class="iconfont font-md">&#xe6e3;</text>
					</view>
					<view class="flex align-center justify-center" hover-class="bg-hover-light" style="height: 90rpx; width:90rpx;" @click="openExtend">
						<text class="iconfont font-md">&#xe682;</text>
					</view>
					<!-- <free-icon-button @click="search">&#xe6e3;</free-icon-button> -->
					<!-- <free-icon-button @click="openExtend">&#xe682;</free-icon-button> -->
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
		},
		mockName: {
			type: String,
			default: ''
		},
		noreadnum: {
			type: Number,
			default: 0
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
	methods: {
		openExtend () {
			this.$emit('openExtend')
		}
	},
	computed: {
		statusBHeight() {
			return `height: ${this.statusBarHeight}px`;
		},
		fixedStyle() {
			return `height: ${this.navBarHeight}px`;
		},
		getTitle() {
			let noreadnum = this.noreadnum > 0 ? '('+this.noreadnum+')' : '';
			return this.mockName + noreadnum
		}
	}
};
</script>

<style></style>
